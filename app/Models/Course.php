<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'price',
        'duration',
        'thumbnail',
        'is_active',
        'user_id',
        'category_id',
        'has_certificate',
        'level',
        'language',
    ];

    protected $casts = [
        'has_certificate' => 'boolean',
    ];

    public function instructor()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviewRatings()
    {
        return $this->hasMany(ReviewRating::class);
    }
}
