(function () {
  "use strict";

angular
    .module('manyfaces', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            template: '<h1>THE MANY FACES OF KRISTEN WIIG</h1><a href="#/manyfaces">Check it out</a>',
            controller: 'MainController'
          })
          .when('/manyfaces', {
            templateUrl: 'views/manyfaces/list.html',
            controller: 'OtherController'

          })
          // .when('/manyfaces/:manyfacesId', {
          //   templateUrl: 'views/manyfaces/show.html',
          //   controller: 'OtherController'
          // })
          .when('/addFace', {
            templateUrl: 'views/manyfaces/create.html',
            controller: 'OtherController'
          })
          .when('/404', {
            templateUrl: 'views/404.html'
          })
          .otherwise({ redirectTo: '/404'});

      });




})();
