<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EnrollmentFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'course_id' => Course::inRandomOrder()->first()->id,
            'enrolled_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'note' => fake()->optional(0.3)->sentence(),
        ];
    }
}
