<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'description' => fake()->paragraph(3),
            'user_id' => User::inRandomOrder()->first()->id,
            'category_id' => Category::inRandomOrder()->first()->id,
            'price' => fake()->randomFloat(2, 50, 500),
            'duration' => fake()->numberBetween(60, 300),
            'is_active' => fake()->boolean(80), // 80% chance of being active
            'thumbnail' => fake()->imageUrl(640, 480, 'education'),
        ];
    }
}
