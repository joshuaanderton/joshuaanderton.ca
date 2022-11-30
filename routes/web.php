<?php

use Illuminate\Support\Facades\{ App, Route, URL };
use App\Actions\Blazervel\JoshuaAnderton;
use App\Actions\Blazervel\JoshuaAndertonBand;
use App\Actions\Blazervel\TimothyPlomo;

if (App::environment(['production', 'staging'])) :
  URL::forceScheme('https');
endif;


// Software Work/Resume Site

Route::domain('joshuaanderton.{ext}')->group(function () {
  Route::get('/', JoshuaAnderton\Home::class)->name('dev.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});

Route::domain('polarize.{ext}')->group(function () {
  Route::get('/', JoshuaAnderton\Home::class)->name('polarize.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});

Route::domain('gettingtoramen.com')->group(function () {
  Route::get('/', JoshuaAnderton\Home::class)->name('gtr.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});


// Joshua Anderton Music Site

Route::domain('music.joshuaanderton.{ext}')->group(fn () => (
  Route::get('/', JoshuaAndertonBand\Home::class)->name('ja.home')
));

Route::domain('joshuaandertonband.com')->group(fn () => (
  Route::get('/', JoshuaAndertonBand\Home::class)->name('ja.home')
));


// Timothy Plomo Site

Route::domain('timothyplomo.joshuaanderton.test')->group(fn () => (
  Route::get('/', TimothyPlomo\Home::class)->name('ja.home')
));

Route::domain('timothyplomo.com')->group(fn () => (
  Route::get('/', TimothyPlomo\Home::class)->name('tp.home')
));