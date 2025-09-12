<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Car;

Route::get('/list', function () {
    return response()->json([
        'message' => Car::all(),
        'status' => 'success'
    ]);
});
