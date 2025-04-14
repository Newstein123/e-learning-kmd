<?php

namespace App\Filament\Resources\UserCertificationResource\Pages;

use App\Filament\Resources\UserCertificationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditUserCertification extends EditRecord
{
    protected static string $resource = UserCertificationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
