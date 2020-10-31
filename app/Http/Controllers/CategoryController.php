<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addCategory(Request $request)
    {
        //return $request->all();

        $request->validate([
            'cat_name' => 'required|min:3|max:30'
        ]);

        Category::create($request->except('_token'));

        return ['message' => 'OK'];
    }

    public function allCategory()
    {
        $categories = Category::all();

        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function deleteCategory($id)
    {   
        $category = Category::find($id);
        $category->delete();
    }

    public function editCategory($id)
    {
        $category = Category::find($id);

        return response()->json([
            'category' => $category
        ], 200);
    }

    public function updateCategory(Request $request, $id)
    {   
        $category = Category::find($id);

        $request->validate([
            'cat_name' => 'required|min:3|max:30'
        ]);

        // $category->cat_name = $request->cat_name;

        // $category->save();

        $category->update([
            'cat_name' => $request->cat_name
        ]);
    }

    public function selectedCategory($ids)
    {
        $all_id = explode(',', $ids);

        //print_r($all_id);

        foreach($all_id as $id)
        {
            $category = Category::find($id);
            $category->delete();
        }
       
        
    }
}
