<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('brand');
            $table->string('series');
            $table->string('model');
            $table->string('transmission');
            $table->integer('clutch');
            $table->integer('price');
            $table->dateTime('year');
            $table->integer('volume');
            $table->string('bodyType');
            $table->string('color');
            $table->string('mileage');
            $table->string('fuel');
            $table->string('description')->nullable();
            $table->string('images')->nullable();
            $table->uuid('userID');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
