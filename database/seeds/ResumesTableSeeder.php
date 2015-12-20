<?php

use Illuminate\Database\Seeder;

class ResumesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Get JSON resume seeder data from file
        $json_file = File::get("database/jsondata/resume.json");
        $json_data = json_decode($json_file);


        // Seeds the 'resumes' table with a generic resume JSON object
        DB::table('resumes')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'date_uploaded' => Carbon\Carbon::now()->toDateString(),
            'resume_json' => json_encode($json_data),
        ]);
    }
}
