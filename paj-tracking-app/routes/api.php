<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DeviceController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login', [AuthController::class, 'login']);
Route::get('/device', [DeviceController::class, 'getDevices']);
Route::get('/devices/{id}/tracking', [DeviceController::class, 'getDeviceTracking']);
