<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Image;

class PostController extends Controller
{
    /*public function all_post()
    {
        // $posts = Post::all();
        $posts = Post::with('user','category')->get();
        return $posts;
    }*/

    public function allPost()
    {
        //$posts = Post::all();
        $posts = Post::with('user','category')->orderBy('id', 'DESC')->get();

        return response()->json([
            'posts' => $posts
        ], 200);
    }

    public function savePost(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3|max:30',
            'description' => 'required',
            'category_id' => 'required',
            //'photo' => 'image|mimes:jpeg,png,jpg'
        ]);

        $strpos = strpos($request->photo, ';');
        $substr = substr($request->photo, 0, $strpos);
        $extension = explode('/', $substr)[1];
        $name = time().".".$extension;
        $upload_path = public_path()."/uploadimage/";
        //return $extension;

        //http://image.intervention.io/getting_started/installation#laravel
        //image intervention
        $img = Image::make($request->photo)->resize(300, 300);
        $img->save($upload_path.$name);
        
        Post::create([
            'title' => request('title'),
            'description' => request('description'),
            'category_id' => request('category_id'),
            'user_id' => Auth::user()->id,
            'photo' => $name
        ]);
    }

    public function deletePost($id)
    {
        $post = Post::find($id);

        $image_path = public_path()."/uploadimage/";
        $image = $image_path.$post->photo;

        if(file_exists($image))
        {
            @unlink($image);
        }

        $post->delete();
    }

    public function editPost($id)
    {
        $post = Post::find($id);

        return response()->json([
            'post' => $post
        ], 200);
    }

    public function updatePost(Request $request, $id)
    {
        $post = Post::find($id);

        $request->validate([
            'title' => 'required|min:3|max:30',
            'description' => 'required',
            'category_id' => 'required',
            //'photo' => 'image|mimes:jpeg,png,jpg'
        ]);

        if($request->photo != $post->photo)
        {
            $strpos = strpos($request->photo, ';');
            $substr = substr($request->photo, 0, $strpos);
            $extension = explode('/', $substr)[1];
            $name = time().".".$extension;
            $upload_path = public_path()."/uploadimage/";
            //return $extension;

            //http://image.intervention.io/getting_started/installation#laravel
            //image intervention
            $img = Image::make($request->photo)->resize(300, 300);
            $img->save($upload_path.$name);

            // remove existing image from file storage
            $image = $upload_path.$post->photo;

            if(file_exists($image))
            {
                @unlink($image);
            }
        }
        else
        {
            $name = $post->photo;
        }
        
        $post->update([
            'title' => request('title'),
            'description' => request('description'),
            'category_id' => request('category_id'),
            'user_id' => Auth::user()->id,
            'photo' => $name
        ]);
    }
}
