<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    public function index()
    {
        return User::where('role', '!=', 'admin')->latest()->get();
    }
    public function indexPreProvider()
    {
        return User::where('role', '=', 'preProvider')->latest()->get();
    }

    public function destroy(User $user)
    {
        $user->delete();
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => ['required', 'regex:/^09\d{8}$/'],
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

    public function registerProvider(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'phone_number' => ['required', 'regex:/^09\d{8}$/'],
            'password' => 'required|min:8|confirmed ',
        ]);

        $fields['role'] = "preProvider";




        $user =  User::create($fields);

        $token = $user->createToken($request->name);

        //  Sending Welcome Message

        $toEmail = $request->email;
        $user_name =  $request->name;
        $subject = 'Welcome Message From Ethio Trip';

        Mail::to($toEmail)->send(new WelcomeEmail($user_name, $subject));

        return ['user' => $user, 'token' => $token->plainTextToken];
    }

    public function approvePreProvider(User $user)
    {
        $user->role = 'provider';
        $user->save();

        return response()->json($user);
    }
}
