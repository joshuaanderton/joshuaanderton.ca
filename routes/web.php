<?php

use Illuminate\Support\Facades\{ App, Route, URL };
use App\Features\Pages;

if (App::environment(['production', 'staging'])) :
  URL::forceScheme('https');
endif;

Route::domain(config('subdomains.music'))->group(function ($router) {
  Route::get('/', Pages\Music::class)->name('music');
});

Route::get('/', Pages\Home::class)->name('home');

Route::domain('gettingtoramen.com')->group(fn () => (
  Route::get('/', Pages\Home::class)->name('home')
));

Route::get('chat', fn () => view('chat'))->name('chat');