<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('todos/create', function (Request $request) {

  $request->validate([
    'message' => 'required|string'
  ]);

  $todo = \App\Models\Todo::create(['content' => $request->message]);

  return response()->json(compact('todo'), 200);

});