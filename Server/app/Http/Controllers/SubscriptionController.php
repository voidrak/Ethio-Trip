<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  Subscription::latest()->with(['user', 'package'])->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'package_id' => 'required|exists:packages,id',
            'person_amount' => 'required|integer',
        ]);

        $package = Package::findOrFail($validatedData['package_id']);

        if ($validatedData['person_amount'] > $package->available_space) {
            return response()->json(['errors' => ['person_amount' => ['Not enough available space for the requested number of persons']]], 400);
        }

        // Decrease the available space
        $package->available_space -= $validatedData['person_amount'];
        $package->save();

        $subscription = $request->user()->subscriptions()->create($validatedData);

        return response()->json(['message' => 'Subscription created successfully', 'subscription' => $subscription], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Subscription $subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subscription $subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subscription $subscription)
    {
        $subscription->delete();
    }

    /**
     * Get subscriptions for packages created by the currently logged-in user.
     */
    public function providerSubscriptions()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Get the package IDs that belong to the logged-in user
        $packageIds = Package::where('user_id', $user->id)->pluck('id');

        // Get the subscriptions for those package IDs
        $subscriptions = Subscription::whereIn('package_id', $packageIds)
            ->latest()
            ->with(['user', 'package'])
            ->get();

        return response()->json($subscriptions);
    }
}
