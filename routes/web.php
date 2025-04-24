<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home route
Route::get('/', function () {
    $projects = \App\Models\Project::orderBy('order', 'asc')
        ->where('featured', true)
        ->limit(6)
        ->get();
        
    return inertia('Home', [
        'projects' => $projects
    ]);
})->name('home');

// About route
Route::get('/about', function () {
    return inertia('About');
})->name('about');

// Contact page
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

// Project routes
Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{id}', [ProjectController::class, 'show'])->name('projects.show');

Route::fallback(function () {
    return inertia('NotFound');
});
