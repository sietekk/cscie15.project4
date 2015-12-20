<?php

namespace Project4\Http\Controllers;

use Illuminate\Http\Request;

use Project4\Http\Requests;
use Project4\Http\Controllers\Controller;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Returns resume view
        return view('resume')->with('render_app', 'resume');
    }

}
