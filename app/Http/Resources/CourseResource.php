<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use App\Models\UserCertification;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $hasFinished = false;
        $hasNotCompleted = false;
        if (auth()->user()) {
            $userCertificate = UserCertification::where('user_id', auth()->user()->id)->where('course_id', $this->id)->first();
            if ($userCertificate) {
                if ($userCertificate->status === 'approved') {
                    $hasFinished = true;
                }
            } else {
                $lessons = $this->lessons;
                $score = 0;
                foreach ($lessons as $lesson) {
                    $quiz = $lesson->quiz;
                    \Log::info('Quiz', ['quiz' => $quiz]);
                    if (!$quiz) {
                        continue;
                    }

                    if (auth()->user()->userAnswers()->get()->isEmpty()) {
                        continue;
                    }

                    $quizAnswer = auth()->user()->userAnswers()->where('quiz_id', $quiz->id)->first();
                    \Log::info('Quiz answer', ['quizAnswer' => $quizAnswer]);
                    if (!$quizAnswer) {
                        \Log::info("Lessson {$lesson->id} no answer");
                        $hasNotCompleted = true;
                        break;
                    }

                    if ($quizAnswer->score > 0) {
                        \Log::info("Lessson {$lesson->id} score", ['score' => $quizAnswer->score]);
                        $score += $quizAnswer->score;
                    }
                }

                if ($score > 0 && !$hasNotCompleted) {
                    $hasFinished = true;
                    $userCertificate = UserCertification::create([
                        'user_id' => auth()->user()->id,
                        'course_id' => $this->id,
                    ]);
                    \Log::info('Has finished', ['hasFinished' => $hasFinished]);
                }
            }
        }

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
            'review_ratings' => ReviewRatingResource::collection($this->reviewRatings),
            'is_enrolled' => auth()->user() ? $this->enrollments()->where('user_id', auth()->user()->id)->where('status', 'approved')->exists() : false,
            'payment_status' => auth()->user() ? $this->enrollments()->where('user_id', auth()->user()->id)->first()?->status : null,
            'has_finished' => $hasFinished,
        ];
    }
}
