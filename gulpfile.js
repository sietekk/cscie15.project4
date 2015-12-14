var elixir = require("laravel-elixir");
var gulp = require("gulp");
var del = require("del");

var production = elixir.config.production;
var log = elixir.Log;
var task = elixir.Task;

var paths = {
    "jquery": "./node_modules/jquery/dist/",
    "bootstrap": "./node_modules/bootstrap-sass/assets/",
    "fontawesome": "./node_modules/font-awesome/"
}

elixir.extend("cleanbundles", function(ifProd) {
    new task("cleanbundles", function() {
        if (ifProd) {
            log.heading("Deleting Bundle Files and Folders...");
            del(
                ["public/css/**", "public/js/**"],
                function (err, paths) {
                    (!err && log.files(paths)) || log.heading(err);
                }
            );
        } else {
            log.heading("DEV mode; not deleting files!");
        }
    });
 });

elixir(function(mix) {
    mix.sass("app.scss", "public/css/bundle.css");

    mix.browserify(["index.js"], "public/js/app.js");

    mix.scripts([
            paths.jquery + "jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            "./public/js/app.js"
        ], "public/js/bundle.js");

    mix.version(["public/js/bundle.js", "public/css/bundle.css"]);

    mix.copy(paths.bootstrap + "fonts/bootstrap/**", "public/build/fonts/bootstrap");

    mix.copy(paths.fontawesome + "fonts/**", "public/build/fonts/font-awesome");

    mix.copy("resources/assets/img/**", "public/build/img");

    mix.cleanbundles(production);

    mix.browserSync({proxy: 'localhost'});

});
