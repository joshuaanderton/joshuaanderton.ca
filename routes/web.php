<?php

use Illuminate\Support\Facades\Route;
use App\Actions\Podcasts;

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

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

// Route::view('haptics');
Route::get('tres-commas.{ext?}', Podcasts\TresCommasRss::class);
