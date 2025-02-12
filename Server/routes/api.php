<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');






Route::get('/packages', [PackageController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/packages/{package}', [PackageController::class, 'show']);
    Route::post('/packages', [PackageController::class, 'store'])->middleware(AdminMiddleware::class);
    Route::put('/packages/{package}', [PackageController::class, 'update'])->middleware(AdminMiddleware::class);
    Route::delete('/packages/{package}', [PackageController::class, 'destroy'])->middleware(AdminMiddleware::class);
});




Route::middleware('auth:sanctum')->group(function () {
    Route::get('/subscriptions', [SubscriptionController::class, 'index']);
    Route::post('/subscriptions', [SubscriptionController::class, 'store']);
    Route::delete('/subscriptions/{subscription}', [SubscriptionController::class, 'destroy']);
});





Route::get('/destinations', [DestinationController::class, 'index']);
Route::get('/destinations/{destination}', [DestinationController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/destinations', [DestinationController::class, 'store'])->middleware(AdminMiddleware::class);;
    Route::put('/destinations/{destination}', [DestinationController::class, 'update'])->middleware(AdminMiddleware::class);;
    Route::delete('/destinations/{destination}', [DestinationController::class, 'destroy'])->middleware(AdminMiddleware::class);;
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->middleware(AdminMiddleware::class);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
