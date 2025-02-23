<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Destination::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'destination_title' => 'required|string|max:255',
            'destination_description' => 'required|string',
            'map_link' => 'required|string',
            'best_time_to_visit' => 'required|string',
            'accommodation_option' => 'required|string',
            'place_to_visit' => 'required|string',
            'tips_for_visitors' => 'required|string',

            'banner_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_3' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_4' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'image_5' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Convert destination title to a slug for use in the file name
        $slugTitle = Str::slug($validatedData['destination_title'], '_');

        // Handle image uploads
        foreach (['banner_image', 'image_1', 'image_2', 'image_3', 'image_4', 'image_5'] as $imageField) {
            if ($request->hasFile($imageField)) {
                $file = $request->file($imageField);
                $extension = $file->getClientOriginalExtension();
                // Example: addis_ababa_banner_image_1695661021.jpg
                $fileName = $slugTitle . '_' . $imageField . '_' . time() . '.' . $extension;
                $path = $file->storeAs('destination_images', $fileName, 'public');
                $validatedData[$imageField] = $path;
            }
        }

        $destination = Destination::create($validatedData);

        return response()->json([
            'message' => 'Destination created successfully',
            'destination' => $destination
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Destination $destination)
    {
        return $destination;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Destination $destination)
    {
        $validatedData = $request->validate([
            'destination_title' => 'required|string|max:255',
            'destination_description' => 'required|string',
            'map_link' => 'required|string',
            'best_time_to_visit' => 'required|string',
            'accommodation_option' => 'required|string',
            'place_to_visit' => 'required|string',
            'tips_for_visitors' => 'required|string',
        ]);

        return $destination->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Destination $destination)
    {
        return $destination->delete();
    }
}
