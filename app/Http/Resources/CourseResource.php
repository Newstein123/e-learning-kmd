<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'duration' => $this->duration,
            'thumbnail' => Storage::url($this->thumbnail),
            'instructor' => new UserResource($this->instructor),
            'category' => $this->category,
            'level' => $this->level === 0 ? 'Beginner' : ($this->level === 1 ? 'Intermediate' : 'Advanced'),
            'language' => $this->language,
            'has_certificate' => $this->has_certificate,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'lessons' => LessonResource::collection($this->lessons),
            'review_ratings' => $this->reviewRatings,
            'is_enrolled' => $this->enrollments()->where('user_id', auth()->user()->id)->where('status', 'approved')->exists(),
        ];
    }
}
