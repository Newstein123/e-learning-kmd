<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
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
            'course_id' => Course::latest()->first()->id,
            'is_active' => fake()->boolean(90), // 90% chance of being active
            'video_thumbnail' => fake()->imageUrl(640, 480, 'education'),
            'video_url' => fake()->url(),
            'duration' => fake()->numberBetween(10, 60),
            'order' => fake()->numberBetween(1, 10),
        ];
    }
}
