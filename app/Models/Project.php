<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'url',
        'github_url',
        'status',
        'order',
        'featured'
    ];
    
    protected $casts = [
        'featured' => 'boolean',
        'order' => 'integer'
    ];
}
