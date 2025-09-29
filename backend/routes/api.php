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
Route::get('/list/{id}', function ($id) {

    return response()->json([
        'message' => Car::find($id),
        'status' => 'success'
    ]);

});
