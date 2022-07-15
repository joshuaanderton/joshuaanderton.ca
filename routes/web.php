<?php

use Illuminate\Support\Facades\Route;
use App\Features\Pages;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::domain(config('subdomains.music'))->group(function ($router) {
  Route::get('/', Pages\Music::class)->name('music');
});

Route::get('/', Pages\Home::class)->name('home');
