<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Category;
use App\Models\ContactForm;
use App\Models\Enrollment;
use App\Models\ReviewRating;
use App\Models\UserAnswer;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Storage;

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

    public function about()
    {
        return Inertia::render('About/Index');
    }

    public function contact()
    {
        return Inertia::render('Contact/Index');
    }

    public function storeContactForm(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        ContactForm::create($request->all());
        return redirect()->back()->with('success', 'Contact form submitted successfully');
    }

    public function submitQuiz(Request $request)
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'score' => 'required|integer|min:0',
        ]);
        $request->merge(['user_id' => auth()->user()->id]);
        UserAnswer::create($request->all());
        return redirect()->back()->with('success', 'Quiz submitted successfully');
    }

    public function enrollCourse(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:255',
            'payment_proof' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'note' => 'nullable|string',
        ]);
        $data = $request->all();
        if (request()->hasFile('payment_proof')) {
            $file = $request->file('payment_proof');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = Storage::putFileAs('payment_proofs', $file, $filename);
            \Log::info('Payment proof path: ' . $path);
            $data['payment_proof'] = $path;
            $data['enrolled_at'] = now();
            $data['status'] = 'pending';
        }
        \Log::info('Request data: ' . json_encode($data));
        Enrollment::create($data);
        return redirect()->back()->with('success', 'Course enrolled successfully');
    }
}
