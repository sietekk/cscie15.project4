<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Creates table 'blogs' that holds blog entries
        Schema::create('blogs', function(Blueprint $table) {

            $table->increments('id');
            $table->timestamps();
            $table->string('title');
            $table->date('date');
            $table->string('link');
            $table->string('link_text');
            $table->string('summary');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drops table 'blogs'
        Schema::drop('blogs');
    }
}
