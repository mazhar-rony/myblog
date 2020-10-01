<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all_post()
    {
        // $posts = Post::all();
        $posts = Post::with('user','category')->get();
        return $posts;
    }
}
