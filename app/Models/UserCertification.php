<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCertification extends Model
{
    protected $fillable = [
        'user_id',
        'course_id',
        'status',
    ];

    public function student()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }
}
