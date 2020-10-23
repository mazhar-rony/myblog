<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/posts', 'PostController@all_post');

//Route::get('/{anypath}', 'HomeController@index')->where('path', '.*');

//Category
Route::post('/add-category', 'CategoryController@addCategory');
Route::get('/category', 'CategoryController@allCategory');
Route::get('/category/{id}', 'CategoryController@deleteCategory');
Route::get('/editcategory/{id}', 'CategoryController@editCategory');
Route::post('/update-category/{id}', 'CategoryController@updateCategory');