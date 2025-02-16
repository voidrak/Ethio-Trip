<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'package_name',
        'package_description',
        'duration',
        'price',
        'available_space',
        'location',
        'food',
        'bus',
        'accommodation',
        'package_image',
        'user_id', // Make sure this is in the fillable array
    ];

    public function subscription()
    {
        $this->hasMany(Subscription::class, 'package_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
