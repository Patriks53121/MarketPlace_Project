<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{

    public function up(): void{

        schema::create('cars', function(Blueprint $table){
           $table->id();
           $table->string('brand');
           $table->string('series');
           $table->string('model');
           $table->string('transmission');
           $table->integer('clutch');
           $table->integer('price');
           $table->timestamp('year');
           $table->integer('volume');
           $table->integer('bodyType');
           $table->string('color');
           $table->string('Millage');
           $table->string('fuel');
           $table->uuid('userID');

        });

    }
};
