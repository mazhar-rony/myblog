<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function allBlogPost()
    {
        $posts = Post::with('user','category')->orderBy('id', 'DESC')->get();

        return response()->json([
            'posts' => $posts
        ], 200);
    }

    public function getPostById($id)
    {
        $post = Post::with('user', 'category')->where('id', $id)->first();

        return response()->json([
            'post' => $post
        ], 200);
    }
}
