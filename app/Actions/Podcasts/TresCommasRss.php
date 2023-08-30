<?php

namespace App\Actions\Podcasts;

class TresCommasRss
{
    public function __invoke()
    {
        $headers = ['Content-Type' => 'text/xml; charset=utf-8'];

        return response(view('podcasts.tres-commas-rss', [
            'title' => 'Tres Commas',
            'subdomain' => 'tres-commas',
            'guid' => '9a042732-53af-42cb-8ad5-631beb361832',
            'description' => 'Listen in as I navigate the slow SaaS ramp of death while asking for help along the way from people like Justin Jackson, Matt Wensing, and others who have gone before me...',
            'owner_name' => 'Joshua Anderton',
            'owner_email' => 'joshua@polarize.tech',
            'author' => 'Joshua Anderton',
            'episodes' => [
                [
                   'guid' => '9a0427e7-0327-4e37-8a32-4565fe8ac0a2',
                   'number' => 1,
                   'title' => 'Head of Product at Userfeed.io',
                   'author' => 'Joshua Anderton',
                   'description' => '<p>Joshua interviews the new Head of Product at Userfeed.io...</p><p><strong>Links &amp; Resources</strong></p><ul>
<li><a href="https://listen.madewithgrit.fm/episodes/14-a-big-announcement-about-the-future-of-userfeed">Made with Grit podcast episode</a></li>
<li><a href="https://twitter.com/LandonB32/status/1223238346924838912?s=20">Landon\'s announcement on Twitter</a></li>
<li><a href="https://userfeed.io">Userfeed - Build the right products and grow your business using Intercom data</a></li>
</ul>
<p>Joshua interviews the new Head of Product at Userfeed.io...</p><p><strong>Links &amp; Resources</strong></p><ul>
<li><a href="https://listen.madewithgrit.fm/episodes/14-a-big-announcement-about-the-future-of-userfeed">Made with Grit podcast episode</a></li>
<li><a href="https://twitter.com/LandonB32/status/1223238346924838912?s=20">Landon\'s announcement on Twitter</a></li>
<li><a href="https://userfeed.io">Userfeed - Build the right products and grow your business using Intercom data</a></li>
</ul>',
                ]
            ]
        ]))->withHeaders($headers);
    }
}
