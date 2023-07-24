<?php

namespace App\Models;

use App\Events\TodoCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'content'
    ];

    public static function booted()
    {
        static::created(function ($todo) {
            TodoCreated::dispatch($todo);
        });
    }
}
