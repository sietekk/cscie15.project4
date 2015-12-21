<?php

namespace Project4\Http\Controllers;

use Illuminate\Http\Request;

use Project4\Http\Requests;
use Project4\Http\Controllers\Controller;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function resume()
    {
        // Returns resume JSON
        $resume = \Project4\Resume::first();
        $json_data = json_decode($resume->resume_json);
        return response()->json($json_data);
    }

    public function blog()
    {
        // Returns last five blog entries
        $blog_items = \Project4\Blog::orderBy('id','descending')->get();
        $chunk = $blog_items->take(5);
        return response()->json($chunk);
        
    }
}
