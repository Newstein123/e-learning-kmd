<?php

namespace App\Filament\Resources\ReviewRatingResource\Pages;

use App\Filament\Resources\ReviewRatingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditReviewRating extends EditRecord
{
    protected static string $resource = ReviewRatingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
