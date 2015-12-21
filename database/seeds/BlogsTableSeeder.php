<?php

use Illuminate\Database\Seeder;

class BlogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seeds the 'blogs' table
        DB::table('blogs')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'title' => 'Thinking in React',
            'date' => Carbon\Carbon::now()->toDateString(),
            'link' => 'https://facebook.github.io/react/docs/thinking-in-react.html',
            'link_text' => 'Thinking in React',
            'summary' => 'This website gives a detailed account of how one may better understand the React.js library',
        ]);

        DB::table('blogs')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'title' => 'Learning React.js: Getting Started and Concepts',
            'date' => Carbon\Carbon::now()->toDateString(),
            'link' => 'https://scotch.io/tutorials/learning-react-getting-started-and-concepts',
            'link_text' => 'Scotch.io React Tutorial',
            'summary' => 'A great tutorial to get started working with the React.js library.',
        ]);

        DB::table('blogs')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'title' => 'The Flask Microframework',
            'date' => Carbon\Carbon::now()->toDateString(),
            'link' => 'http://flask.pocoo.org/',
            'link_text' => 'The Flask Website',
            'summary' => 'The main Flask website covering all documentation necessary to work with the Flask microframework.',
        ]);

        DB::table('blogs')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'title' => 'How to Create a Pure CSS Dropdown Menu',
            'date' => Carbon\Carbon::now()->toDateString(),
            'link' => 'http://webdesignerhut.com/css-dropdown-menu/',
            'link_text' => 'Link to Tutorial',
            'summary' => 'This site gives a great breakdown of how to create a completely custom, CSS-based dropdown menu.',
        ]);

        DB::table('blogs')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'title' => 'Top 10 Material Design Frameworks for Modern UX/UI Design',
            'date' => Carbon\Carbon::now()->toDateString(),
            'link' => 'http://noeticforce.com/best-material-design-web-frameworks',
            'link_text' => 'Link to Article',
            'summary' => 'A wonderful article covering all the relevant and available choices to implement Google\'s Material Design.',
        ]);

        DB::table('blogs')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'title' => 'Laravel Elixir',
            'date' => Carbon\Carbon::now()->toDateString(),
            'link' => 'http://laravel.com/docs/5.1/elixir',
            'link_text' => 'Link to Documentation',
            'summary' => 'Laravel\'s own documentation covering Elixir, which is Laravel\'s wrapper around the Gulp task runner process.',
        ]);
    }
}
