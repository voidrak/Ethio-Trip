<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    /** @use HasFactory<\Database\Factories\PackageFactory> */
    use HasFactory;

    protected $fillable = ['package_name', ' package_description', 'duration ', '', '', 'price', 'available_space', 'location', 'food', 'bus', 'accommodation', 'package_image',];


    public function subscription()
    {
        $this->hasMany(Subscription::class, 'package_id');
    }
}
