<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReviewRating extends Model
{
    protected $fillable = [
        'user_id',
        'course_id',
        'rating',
        'review',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
