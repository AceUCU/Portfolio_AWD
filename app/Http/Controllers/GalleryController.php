<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    // Display all projects
    public function index()
    {
        $projects = Gallery::orderByDesc('id')->get();

        return Inertia::render('Portfolio', [
            'projects' => $projects,
        ]);
    }

    // Show create page
    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    // Save a new project
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:gallery,title',
            'category' => 'required|string|max:100',
            'description' => 'required|string',
            'date' => 'required|date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'project_url' => 'nullable|url|max:255',
        ], [
            'title.required' => 'Please enter the project title.',
            'title.unique' => 'This project title already exists. Please choose another title.',
            'category.required' => 'Please select a project category.',
            'category.max' => 'The category must not exceed 100 characters.',
            'description.required' => 'Please enter the project description.',
            'date.required' => 'Please select the project completion date.',
            'date.date' => 'Please enter a valid date.',
            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'Only JPG, JPEG, PNG, and WEBP images are allowed.',
            'image.max' => 'The image must not exceed 2MB.',
            'project_url.url' => 'Please enter a valid project URL.',
            'project_url.max' => 'The project URL must not exceed 255 characters.',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('gallery', 'public');
        }

        Gallery::create([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'date' => $validated['date'],
            'image_path' => $imagePath,
            'project_url' => $validated['project_url'] ?? null,
        ]);

        return redirect()
            ->route('portfolio.index')
            ->with('success', 'Project created successfully!');
    }

    // Show edit page
    public function edit(Gallery $gallery)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $gallery,
        ]);
    }

    // Update an existing project
    public function update(Request $request, Gallery $gallery)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:gallery,title,' . $gallery->id,
            'category' => 'required|string|max:100',
            'description' => 'required|string',
            'date' => 'required|date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'project_url' => 'nullable|url|max:255',
        ], [
            'title.required' => 'Please enter the project title.',
            'title.unique' => 'This project title already exists. Please choose another title.',
            'category.required' => 'Please select a project category.',
            'category.max' => 'The category must not exceed 100 characters.',
            'description.required' => 'Please enter the project description.',
            'date.required' => 'Please select the project completion date.',
            'date.date' => 'Please enter a valid date.',
            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'Only JPG, JPEG, PNG, and WEBP images are allowed.',
            'image.max' => 'The image must not exceed 2MB.',
            'project_url.url' => 'Please enter a valid project URL.',
            'project_url.max' => 'The project URL must not exceed 255 characters.',
        ]);

        $imagePath = $gallery->image_path;

        if ($request->hasFile('image')) {
            if ($imagePath && Storage::disk('public')->exists($imagePath)) {
                Storage::disk('public')->delete($imagePath);
            }

            $imagePath = $request->file('image')->store('gallery', 'public');
        }

        $gallery->update([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'date' => $validated['date'],
            'image_path' => $imagePath,
            'project_url' => $validated['project_url'] ?? null,
        ]);

        return redirect()
            ->route('portfolio.index')
            ->with('success', 'Project updated successfully!');
    }

    // Delete a project
    public function destroy(Gallery $gallery)
    {
        if (
            $gallery->image_path &&
            Storage::disk('public')->exists($gallery->image_path)
        ) {
            Storage::disk('public')->delete($gallery->image_path);
        }

        $gallery->delete();

        return redirect()
            ->route('portfolio.index')
            ->with('success', 'Project deleted successfully!');
    }
}
