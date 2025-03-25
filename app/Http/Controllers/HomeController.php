<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Category;
use App\Models\ReviewRating;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $query = Course::with('instructor', 'category', 'lessons');

        if ($request->category_id) {
            $query->where('category_id', $request->category_id);
        }

        $courses = $query->orderBy('created_at', 'desc')->limit(6)->get();
        $categories = Category::orderBy('created_at', 'desc')->get();
        $totalCourses = Course::count();
        return Inertia::render('Index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'courses' => $courses,
            'categories' => $categories,
            'totalCourses' => $totalCourses,
        ]);
    }

    public function courseDetails($id)
    {
        $course = Course::with('instructor', 'category', 'lessons', 'reviewRatings', 'reviewRatings.user')->find($id);
        return Inertia::render('Course/Show', ['course' => new CourseResource($course)]);
    }

    public function courses(Request $request)
    {
        $query = Course::with('instructor', 'category', 'lessons', 'reviewRatings');
        $categories = Category::orderBy('created_at', 'desc')->get();
        $page = $request->page ?? 1;
        $perPage = $request->per_page ?? 10;
        if ($request->category_id) {
            $query->where('category_id', $request->category_id);
        }
        $courses = $query->orderBy('created_at', 'desc')->paginate($perPage, ['*'], 'page', $page);
        return Inertia::render('Course/Index', [
            'courses' => CourseResource::collection($courses),
            'categories' => $categories,
        ]);
    }

    public function storeReviewRating(Request $request, $id)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'review' => 'required|string|max:255',
        ]);

        $reviewRating = ReviewRating::create([
            'rating' => $request->rating,
            'review' => $request->review,
            'course_id' => $id,
            'user_id' => auth()->user()->id,
        ]);
        return redirect()->back()->with('success', 'Review rating created successfully');
    }
}
