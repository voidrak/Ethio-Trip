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
    Route::get('/ProviderPackages', [PackageController::class, 'ProviderPackages']);
    Route::post('/packages', [PackageController::class, 'store']);
    Route::put('/packages/{package}', [PackageController::class, 'update']);
    Route::delete('/packages/{package}', [PackageController::class, 'destroy']);
});




Route::middleware('auth:sanctum')->group(function () {
    Route::get('/subscriptions', [SubscriptionController::class, 'index']);
    Route::get('/providerSubscriptions', [SubscriptionController::class, 'providerSubscriptions']);
    Route::post('/subscriptions', [SubscriptionController::class, 'store']);
    Route::delete('/subscriptions/{subscription}', [SubscriptionController::class, 'destroy']);
});





Route::get('/destinations', [DestinationController::class, 'index']);
Route::get('/destinations/{destination}', [DestinationController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/destinations', [DestinationController::class, 'store']);;
    Route::put('/destinations/{destination}', [DestinationController::class, 'update']);;
    Route::delete('/destinations/{destination}', [DestinationController::class, 'destroy']);;
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin/users', [UserController::class, 'index']);
    Route::delete('/admin/users/{user}', [UserController::class, 'destroy']);
    Route::put('/user/profile', [UserController::class, 'update']);
    Route::get('/admin/preProvider', [UserController::class, 'indexPreProvider']);
    Route::put('/admin/approvePreProvider/{user}', [UserController::class, 'approvePreProvider']);
});

Route::post('/register/provider', [UserController::class, 'registerProvider']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
