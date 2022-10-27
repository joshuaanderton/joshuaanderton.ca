<?php

use Illuminate\Support\Facades\{ App, Artisan, Route, URL };
use App\Actions\Pages;

if (App::environment(['production', 'staging'])) :
  URL::forceScheme('https');
endif;


// Software Work/Resume Site

Route::domain('joshuaanderton.{ext}')->group(function () {
  Route::get('/', Pages\Polarize\Home::class)->name('dev.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});

Route::domain('polarize.{ext}')->group(function () {
  Route::get('/', Pages\Polarize\Home::class)->name('polarize.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});

Route::domain('gettingtoramen.com')->group(function () {
  Route::get('/', Pages\Polarize\Home::class)->name('gtr.home');
  Route::get('chat', fn () => view('chat'))->name('chat');
});


// Ximena Portfolio Site

Route::domain('ximenaalexandra.joshuaanderton.test')->group(fn () => (
  Route::get('/', Pages\XimenaAlexandra\Home::class)->name('ja.home')
));

Route::domain('ximenaalexandra.com')->group(fn () => (
  Route::get('/', Pages\XimenaAlexandra\Home::class)->name('tp.home')
));


// Joshua Anderton Music Site

Route::domain('music.joshuaanderton.{ext}')->group(fn () => (
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


//Other

Route::get('cache/clear', function () {
  Artisan::call('cache:clear');
  
  return redirect()->route('home');
});