<?php

namespace App\Filament\Widgets;

use App\Models\Course;
use Filament\Widgets\ChartWidget;

class CourseProgressWidget extends ChartWidget
{
    protected static ?string $heading = 'Course Progress';

    protected function getData(): array
    {
        $courses = Course::withCount(['lessons'])->get();

        return [
            'datasets' => [
                [
                    'label' => 'Course Progress',
                    // 'data' => $courses->map(
                    //     fn($course) => ($course->completed_lessons_count / max($course->lessons_count, 1)) * 100
                    // )->toArray(),
                    'data' => [10, 20, 30, 40, 50],
                ],
            ],
            'labels' => $courses->pluck('title')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
