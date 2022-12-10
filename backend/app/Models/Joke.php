<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joke extends Model
{
    protected $table = 'joke';
    protected $primaryKey = 'idJoke';

    protected $fillable =[
        'idJoke',
        'content',
        'created_at',
        'updated_at'
    ];
    use HasFactory;
}
