<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\TasksController;

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

Route::get('/', [Controller::class, 'routes'])
    ->name('route information')
    ->withoutMiddleware('api');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tasks', [TasksController::class, 'index'])->name('Endpoint getting tasks list');
Route::get('/tasks/{id}', [TasksController::class, 'find'])->name('Endpoint to find a specified task from ID');
//Route::get('/tasks/{title}', [TasksController::class, 'search'])->name('Endpoint to search a specified task from title');
Route::post('/tasks', [TasksController::class, 'store'])->name('Endpoint to create a task');
Route::put('/tasks/{id}', [TasksController::class, 'update'])->name('Endpoint to destroy a task');
Route::delete('/tasks/{id}', [TasksController::class, 'destroy'])->name('Endpoint to destroy a task');