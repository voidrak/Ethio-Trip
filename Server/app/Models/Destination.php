<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    /** @use HasFactory<\Database\Factories\DestinationFactory> */
    use HasFactory;

    protected $fillable = [
        'banner_image',
        'image_1',
        'image_2',
        'image_3',
        'image_4',
        'image_5',
        'destination_title',
        'destination_description',
        'best_time_to_visit',
        'accommodation_option',
        'place_to_visit',
        'tips_for_visitors',
    ];
}
