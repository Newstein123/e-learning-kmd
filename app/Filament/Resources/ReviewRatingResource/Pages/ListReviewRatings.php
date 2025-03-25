<?php

namespace App\Filament\Resources\ReviewRatingResource\Pages;

use App\Filament\Resources\ReviewRatingResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListReviewRatings extends ListRecords
{
    protected static string $resource = ReviewRatingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
