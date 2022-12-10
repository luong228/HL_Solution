<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Joke;

class JokeController extends Controller
{
    public function index()
    {
        // return 'cac';
        $joke = Joke::orderBy('idJoke', 'ASC')->get();
        return response()->json($joke, 200);
        // return response($joke);
        // return $joke;
    }
}
