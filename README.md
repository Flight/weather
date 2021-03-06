# Weather widget

[Link to test on github pages](https://flight.github.io/weather/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

It uses [Angular Material](https://material.angular.io/) version 6.4.7.

## To run the project
Install NodeJS: https://nodejs.org/en/

Then run those commands in your terminal:

`npm install -g @angular/cli`

`npm install`

`ng serve --open`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

For poduction build:
`ng build --prod --base-href /weather/`

## To push changes to github pages

`git subtree push --prefix dist/weather origin gh-pages`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
