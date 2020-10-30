<?php

Route::get('/', function () {
    return view('public/index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/posts', 'PostController@all_post');

//Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');

Route::group(['middleware' => ['auth']], function () {
    //Category
    Route::post('/add-category', 'CategoryController@addCategory');
    Route::get('/category', 'CategoryController@allCategory');
    Route::get('/category/{id}', 'CategoryController@deleteCategory');
    Route::get('/editcategory/{id}', 'CategoryController@editCategory');
    Route::post('/update-category/{id}', 'CategoryController@updateCategory');

    //Post
    Route::get('/post', 'PostController@allPost');
    Route::post('/savepost', 'PostController@savePost');
    Route::get('/delete/{id}', 'PostController@deletePost');
    Route::get('/post/{id}', 'PostController@editPost');
    Route::post('/update-post/{id}', 'PostController@updatePost');
});

//Blog
Route::get('/blogpost', 'BlogController@allBlogPost');
Route::get('/singlepost/{id}', 'BlogController@getPostById');
Route::get('/categories', 'BlogController@getAllCategories');
Route::get('/category/{id}', 'BlogController@getAllPostByCatId');
Route::get('/latestpost', 'BlogController@getLatestPost');