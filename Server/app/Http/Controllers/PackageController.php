<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Package::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {




        $validatedData = $request->validate([
            'package_name' => 'required|string|max:255',
            'package_description' => 'required|string',
            'duration' => 'required|string',
            'price' => 'required|numeric',
            'available_space' => 'required|integer',
            'location' => 'required|string|max:255',
            'food' => 'required|boolean',
            'bus' => 'required|boolean',
            'accommodation' => 'required|boolean',
            'package_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Handle the file upload
        if ($request->hasFile('package_image')) {
            $file = $request->file('package_image');
            $fileName = $validatedData['package_name'] . '.' . $file->getClientOriginalExtension();
            $imagePath = $file->storeAs('package_images', $fileName, 'public');
            $validatedData['package_image'] = $imagePath;
        }

        // return $validatedData;

        // Create the package
        $package = Package::create($validatedData);

        // Return a JSON response
        return response()->json(['message' => 'Package created successfully', 'package' => $package], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Package $package)
    {
        return $package;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Package $package)
    {

        $validatedData = $request->validate([
            'package_name' => 'required|string|max:255',
            'package_description' => 'required|string',
            'duration' => 'required|string',
            'price' => 'required|numeric',
            'available_space' => 'required|integer',
            'food' => 'required|boolean',
            'bus' => 'required|boolean',
            'accommodation' => 'required|boolean',
        ]);

        return $package->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Package $package)
    {
        //
    }
}
