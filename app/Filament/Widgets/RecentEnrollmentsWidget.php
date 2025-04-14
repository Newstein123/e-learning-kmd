<?php

namespace App\Filament\Widgets;

use App\Models\Enrollment;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class RecentEnrollmentsWidget extends BaseWidget
{
    public function table(Table $table): Table
    {
        return $table
            ->query(
                Enrollment::query()->with('student', 'course')->latest()
            )
            ->columns([
                Tables\Columns\TextColumn::make('student.name')->label('Student'),
                Tables\Columns\TextColumn::make('course.title')->label('Course'),
                Tables\Columns\TextColumn::make('created_at')->label('Enrolled On')->date(),
            ]);
    }
}
