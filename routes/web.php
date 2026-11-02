<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GalleryController;
use App\Models\Gallery;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/skills', function () {
    return Inertia::render('Skills');
})->name('skills');

Route::get('/experience', function () {
    return Inertia::render('Experience');
})->name('experience');

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
})->name('contacts');


Route::get('/portfolio', [GalleryController::class, 'index'])
    ->name('portfolio.index');

Route::get('/projects/create', [GalleryController::class, 'create'])
    ->name('projects.create');

Route::post('/projects', [GalleryController::class, 'store'])
    ->name('projects.store');

Route::get('/projects/{gallery}/edit', [GalleryController::class, 'edit'])
    ->name('projects.edit');

Route::put('/projects/{gallery}', [GalleryController::class, 'update'])
    ->name('projects.update');

Route::delete('/projects/{gallery}', [GalleryController::class, 'destroy'])
    ->name('projects.destroy');

Route::get('/projects', function () {
    return Inertia::render('Projects/Index', [
        'projects' => Gallery::orderByDesc('id')->get(),
    ]);
})->name('projects.index');   