<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JokeController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('joke', [JokeController::class, 'index']);
Route::patch('joke/like/{idJoke}', [JokeController::class, 'like']);
Route::patch('joke/dislike/{idJoke}', [JokeController::class, 'dislike']);


// Route::get('joke', 'JokeController@index');
