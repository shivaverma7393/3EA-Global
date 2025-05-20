<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Home');
});
// Campaigns
Route::get('/campaigns', function () {
    return Inertia::render('Campaigns/Index', [
        'campaigns' => [] // Replace with dynamic data later
    ]);
});
Route::get('/campaigns/{id}', function ($id) {
    return Inertia::render('Campaigns/Show', [
        'campaign' => [
            'id' => $id,
            'title' => 'Sample Campaign Title',
            'image' => '/sample.jpg',
            'description' => 'Full campaign description goes here.',
            'progress' => 70,
        ]
    ]);
});

// FAQ
Route::get('/faq', function () {
    return Inertia::render('Support/FAQ');
});

// Contact
Route::get('/contact', function () {
    return Inertia::render('Contact');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

