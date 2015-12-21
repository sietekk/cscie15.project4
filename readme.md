# CSCI E-15 Project 4
# Personal Developer Blog and Resume

## Live URL
<http://p4.sietekk.com>

## Description
#### Info
This application serves as a personal blog and resume website, and was written in React/JSX with a JSON API and Laravel 5.1 on the backend.

#### TODO
Need to implement Admin interface with CRUD operations on database. These features are not yet implemented.

#### Validation
Validation is not implemented yet.

#### Task Runner
##### Development
This application uses NPM, Gulp, and Laravel's Elixir for the task runner workflow:

1. Run `npm install` to install necessary dependencies to the `node_modules` directory.
2. Run `gulp` to compile, bundle, and version all Sass/CSS and JavaScript into the `build/` directory.

##### Production
1. Run `npm install` to install necessary dependencies to the `node_modules` directory.
2. Run `gulp --production` to not only bundle and version all Sass/CSS and JavaScript, but also remove intermediary bundles and directories.

#### Push-to-Deploy
For deployment to a VPS, please follow the intitial instructions [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps) and for the git post-receive hook, please use this bash script and place it in the correct directory:
```
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received. Deploying master branch to production..."
        git --work-tree=/var/www/dwa15/cscie15.project3 --git-dir=/home/michael/repo/cscie15.project3.git checkout -f
        echo "Changing to work tree directory..."
        cd /var/www/dwa15/cscie15.project3
        echo "Running composer to build application..."
        composer install
        echo "Running NPM installation..."
        npm install
        echo "Running Gulp in production mode..."
        gulp --production
        echo "Production push complete..."
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
```

#### APIs
##### Application
The applications accept POST requests made to themselves with following URLs:

| JSON API URL               |  Data Returned                                                             |
| -------------------------- | -------------------------------------------------------------------------- |
| `.../api/blog`             |  Returns blog data as JSON object                                          |
| `.../api/resume`           |  Returns resume data as JSON object                                        |

## Demo

## Details for teaching team
The site is running in production mode, so the CSS and JS bundles are minified and versioned. There is no login, as the Admin section has not been developed yet.

## Outside code
* jQuery: <https://jquery.com/>
* Bootstrap: <http://getbootstrap.com/>
* Background Image: Lost the link -- not attributable to myself

