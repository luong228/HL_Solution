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

    public function like($id) {
        // $joke = Joke::select('like')->where('idJoke', $id)->get();
        $joke = Joke::find($id);
        if(empty($joke)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $currentLike = json_decode($joke)->like + 1;
        $joke->update(['like' => $currentLike]);
        return response([
            'status' => 200,
            'message' => 'Like joke thành công',
        ]);
    }

    public function dislike($id) {
        // $joke = Joke::select('like')->where('idJoke', $id)->get();
        $joke = Joke::find($id);
        if(empty($joke)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $currentDislike = json_decode($joke)->dislike + 1;
        $joke->update(['dislike' => $currentDislike]);
        return response([
            'status' => 200,
            'message' => 'Dislike joke thành công',
        ]);
    }
}
