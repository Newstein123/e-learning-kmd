<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $fillable = [
        'lesson_id',
        'title',
        'description',
    ];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
