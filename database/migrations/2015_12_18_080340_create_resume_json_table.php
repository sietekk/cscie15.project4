<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResumeJsonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Creates table 'resumes' that holds resume JSON
        Schema::create('resumes', function (Blueprint $table) {

            $table->increments('id');
            $table->timestamps();
            $table->date('date_uploaded');
            $table->json('resume_json');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drops table 'resumes'
        Schema::drop('resumes');
    }
}
