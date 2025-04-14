<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/courses', [HomeController::class, 'courses'])->name('courses');
Route::get('/course/{id}', [HomeController::class, 'courseDetails'])->name('course.details');
Route::post('/course/{id}/review-rating', [HomeController::class, 'storeReviewRating'])->name('review-ratings.store');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/contact', [HomeController::class, 'storeContactForm'])->name('contact.store');
    Route::post('/submit-quiz', [HomeController::class, 'submitQuiz'])->name('quiz.submit');
    Route::post('/enroll-course', [HomeController::class, 'enrollCourse'])->name('enroll.course');
    Route::get('/certificate/{courseId}/{userId}', [HomeController::class, 'certificate'])->name('certificate');
});

require __DIR__ . '/auth.php';
