<?php

use Illuminate\Support\Facades\{ App, Route, URL };
use App\Features\Pages;

if (App::environment(['production', 'staging'])) :
  URL::forceScheme('https');
endif;


// Work/Resume Site

Route::domain('joshuaanderton.{ext}')->group(function () {
  Route::get('/', Pages\Resume\Home::class)->name('dev.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});

Route::domain('gettingtoramen.com')->group(function () {
  Route::get('/', Pages\Resume\Home::class)->name('gtr.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});


// Joshua Anderton Music Site

Route::domain('music.joshuaanderton.test')->group(fn () => (
  Route::get('/', Pages\JoshuaAnderton\Home::class)->name('ja.home')
));

Route::domain('joshuaandertonband.com')->group(fn () => (
  Route::get('/', Pages\JoshuaAnderton\Home::class)->name('ja.home')
));


// Timothy Plomo Site

Route::domain('timothyplomo.joshuaanderton.test')->group(fn () => (
  Route::get('/', Pages\TimothyPlomo\Home::class)->name('ja.home')
));

Route::domain('timothyplomo.com')->group(fn () => (
  Route::get('/', Pages\TimothyPlomo\Home::class)->name('tp.home')
));