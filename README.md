
# Description
Create an app which displays and allows to edit properties of a building list. - DONE
Usage of all npm packages is allowed.

# Provided resources

* 2 data files provided with this task:
  * [Geojson](buildings.geojson)
  * [Json](buildings.json) - version of geojson as a fallback if you have not used geojson before
* UI examples in ./example folder
* Structure of the monorepo - there are 3 folders for each process Web app, Api and Database - with initial setup. 
   * Instructions on database setup [here](./database/SETUP.md).
   * Npm packages are defined in package.json for every folder, but there are just suggestions, change them as you wish


# Tasks

## Mandatory

* Create database table to store the json data
  * Choose one of the options:
    * Export pg_dump to ./database/ with the (geo)json data already in the table - NOT SELECTED
    * Write SQL files to create table and upload (geo)json data to database - DONE, check database, readme for more details
    * Write a JavaScript/TypeScript script to execute SQL for table creation and upload the (geo)json data to database - - NOT SELECTED
* Create a angular 7+ application which should:
  * Have a list/table of provided geometries in json file. Each row should contain 1+ properties which best describe the row as unique - DONE
  * Have a page/form/popup which allows to view and edit details of the row (excluding the geometry) - DONE
  * App should use Reactive Forms and Angular Services
  * If Node.js API task is skipped - create a API mock by using service/singleton class to perform Create Read Update Delete operations on the data - SKIPPED
  * (Optional) Render geometries on a map, you'll find that 'openlayers' is suggested but alternative can be used. - SKIPPED

> Abstraction and component reusability is important, however to reduce time needed for the task you can just leave comments on what changes you would add
> on top of written code.

## Node.js API (Optional) - SKIPPED

* Create a simple HTTP server
* CRUD operations server side using REST Api conventions 


# MapApp - Webapplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
