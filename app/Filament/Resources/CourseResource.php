<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseResource\Pages;
use App\Filament\Resources\CourseResource\RelationManagers;
use App\Models\Course;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CourseResource extends Resource
{
    protected static ?string $model = Course::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                Forms\Components\RichEditor::make('description')
                    ->required()
                    ->maxLength(65535),
                Forms\Components\Select::make('user_id')
                    ->relationship('instructor', 'name')
                    ->placeholder('Select Instructor')
                    ->label('Instructor')
                    ->required(),
                Forms\Components\TextInput::make('price')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('duration')
                    ->required()
                    ->numeric(),
                Forms\Components\FileUpload::make('thumbnail')
                    ->image()
                    ->directory('thumbnails')
                    ->required(),
                Forms\Components\Select::make('level')
                    ->options([
                        '0' => 'Beginner',
                        '1' => 'Intermediate',
                        '2' => 'Advanced',
                    ])
                    ->required(),
                Forms\Components\Select::make('language')
                    ->options([
                        'English',
                        'French',
                        'Spanish',
                        'German',
                        'Italian',
                        'Portuguese',
                        'Russian',
                        'Turkish',
                        'Arabic',
                        'Chinese',
                        'Myanmar',
                        'Korean',
                        'Japanese',
                        'Vietnamese',
                        'Indonesian',
                        'Thai',
                        'Dutch',
                        'Polish',
                        'Romanian',
                        'Slovak',
                        'Slovenian',
                        'Swedish',
                        'Turkish',
                        'Ukrainian',
                        'Vietnamese',
                        'Other',
                    ])
                    ->required(),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
                Forms\Components\Toggle::make('has_certificate')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(function (Builder $query) {
                return $query->orderBy('created_at', 'desc');
            })
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\ImageColumn::make('thumbnail'),
                Tables\Columns\TextColumn::make('price'),
                Tables\Columns\TextColumn::make('duration'),
                Tables\Columns\ToggleColumn::make('is_active'),
                Tables\Columns\ToggleColumn::make('has_certificate'),
                Tables\Columns\TextColumn::make('level'),
                Tables\Columns\TextColumn::make('language'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category_id')
                    ->relationship('category', 'name'),
                Tables\Filters\SelectFilter::make('user_id')
                    ->relationship('instructor', 'name'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourses::route('/'),
            'create' => Pages\CreateCourse::route('/create'),
            'edit' => Pages\EditCourse::route('/{record}/edit'),
        ];
    }
}
