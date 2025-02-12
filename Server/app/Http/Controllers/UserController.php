<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::where('role', '!=', 'admin')->latest()->get();
    }

    public function destroy(User $user)
    {
        $user->delete();
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                function ($attribute, $value, $fail) use ($user) {
                    if ($value !== $user->email && User::where('email', $value)->exists()) {
                        $fail('The email has already been taken.');
                    }
                },
            ],
        ]);

        $user->update($validatedData);

        return response()->json($user);
    }
}
