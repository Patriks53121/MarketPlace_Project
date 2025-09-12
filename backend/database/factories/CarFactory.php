<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use PhpOption\None;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'brand' => fake()->name(),
            'series' => fake()->numberBetween(1, 8),
            'model' => fake()->numberBetween(18, 30),
            'transmission' => 'Automats',
            'clutch' => fake()->numberBetween(1, 8),
            'price' => fake()->numberBetween(1000, 100000),
            'description' => fake()->realText(),
            'year' => fake()->dateTimeBetween('-30 years', 'now'),
            'mileage' => 100000,
            'volume' => '3.0',
            'fuel' => 'Dizelis',
            'bodyType' => 'Sedan',
            'color' => fake()->colorName(),
            'userID' => '1',
        ];
    }
}
