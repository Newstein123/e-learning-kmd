<?php

namespace App\Http\Resources;

use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

use function PHPUnit\Framework\isEmpty;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = auth()->user();

        // Retrieve the userAnswers relationship if the user is authenticated
        $userAnswers = $user ? $user->userAnswers()->get() : null;

        \Log::info('User answers', ['answers' => $userAnswers]);

        // Check if userAnswers is not null and not empty
        $score = $userAnswers && !$userAnswers->isEmpty()
            ? (int) $userAnswers->where('quiz_id', $this->id)->sum('score')
            : null;

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'questions' => QuestionResource::collection($this->questions),
            'score' => $score,
        ];
    }
}
