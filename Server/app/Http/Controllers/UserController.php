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
}
