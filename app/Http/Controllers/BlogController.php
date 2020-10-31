<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
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

    public function getAllCategories()
    {
        // $categories = Category::all();
        $categories = Category::with('posts')->get();
        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function getAllPostByCatId($id)
    {
        $posts = Post::with('user','category')->where('category_id', $id)->orderBy('id', 'DESC')->get();

        return response()->json([
            'posts' => $posts
        ], 200);
    }

    public function getLatestPost()
    {
        $posts = Post::with('user','category')->orderBy('id', 'DESC')->take(5)->get();

        return response()->json([
            'posts' => $posts
        ], 200);
    }

    public function searchPost()
    {
        $search = \Request::get('s');

        if($search != null)
        {
            $posts = Post::with('user','category')
                    ->where('title', 'LIKE', "%$search%")
                    ->orWhere('description', 'LIKE', "%$search%")
                    ->orderBy('id', 'DESC')->get();

            return response()->json([
                'posts' => $posts
            ], 200);
        }
        else
        {
            return $this->allBlogPost();
        }
        
    }
}
