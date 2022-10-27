<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class Notion
{
    private string $token;
    private string $version;
    private bool $cache = false;

    public function __construct(string $token = null, string $version = null, bool $cache = null)
    {
        $this->token = $token ?: env('NOTION_API_TOKEN', null);
        $this->version = $version ?: env('NOTION_API_VERSION', '2022-06-28');
        $this->cache = ! ! $cache;
    }

    public function request(string $endpoint, array $data = [], string $method = null): array|null
    {
        if (!in_array($method, ['get', 'post', 'put', 'delete'])) {
            $method = 'get';
        }

        $response = Http::withHeaders([
            'Authorization' => "Bearer {$this->token}",
            'Content-Type' => 'application/json',
            'Notion-Version' => $this->version,
        ])->$method(
            "https://api.notion.com/v1/{$endpoint}",
            $data
        );

        if ($response->ok()) {
            return $response['results'];
        }
        
        return null;
    }

    public function database(string $id, array $filters = []): array|null
    {
        return $this->request(
            endpoint: "databases/{$id}/query",
            data: $filters,
            method: 'post'
        );
    }

    public function pageBlocks(string $pageId): array|null
    {
        return $this->request(
            endpoint: "blocks/{$pageId}/children"
        );
    }

    public function pageBlocksHtml(string $pageId): string
    {
        $blocks = $this->pageBlocks($pageId);

        return (
            collect($blocks)
                ->map(fn ($block) => (
                    collect($block[$block['type']]['rich_text'])
                        ->map(fn ($text) => (
                            $text[$text['type']]['link'] !== null
                                ? "<a href=\"{$text[$text['type']]['link']['url']}\" target=\"_blank\">{$text[$text['type']]['content']}</a>"
                                : $text[$text['type']]['content']
                        ))->join('')
                ))
                ->join('')
        );
    }

    public function pageAttributes(array $pageData, bool $withBlocks = true)
    {
        $attributes = (
            collect($pageData)
                ->map(function ($value, $key) {
                    
                    if (is_string($value) && in_array($key, ['created_time', 'last_edited_time'])) {
                        $value = Carbon::parse($value);
                    } else if (is_array($value) && in_array($key, ['icon', 'cover'])) {
                        $value = $value[$value['type']]['url'];
                    } else if (is_array($value) && in_array($key, ['parent'])) {
                        $value = $value[$value['type']];
                    } else if (is_array($value) && in_array($key, ['created_by', 'last_edited_by'])) {
                        $value = $value['id'];
                    }

                    return [$key => $value];
                })
                ->filter(fn ($value, $key) => $key !== 'properties')
                ->collapse()
                ->all()
        );

        $properties = (
            collect($pageData['properties'])
                ->map(function ($value, $key) {

                    if (in_array($value['type'], ['title', 'rich_text'])) {
                        $value = $value[$value['type']][0]['plain_text'] ?? '';
                    } else if (in_array($value['type'], ['number'])) {
                        $value = $value[$value['type']];
                    } else {
                        $value = $value[$value['type']]['name'];
                    }
                    
                    return [Str::camel($key) => $value];
                })
                ->collapse()
                ->all()
        );
        
        if (Str::contains((string) $attributes['icon'], '.svg')) {
            $attributes['icon'] = file_get_contents(
                (string) $attributes['icon']
            );
        }

        return array_merge(
            $attributes,
            $properties,
            ['content' => $withBlocks ? $this->pageBlocksHtml($pageData['id']) : null]
        );
    }
}