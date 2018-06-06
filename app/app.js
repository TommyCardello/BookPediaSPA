'use strict';

// app + dependencies declaration
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ui.bootstrap'
])

// All pages routes. Will be better to split it to corresponding js files. 
.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
    .when('/books',{
      templateUrl:'books/books.html',
      controller:'genInfoCtrl'
    })
    .when('/authorsBio',{
      templateUrl:'authorsBio/authorsBio.html',
      controller:'genInfoCtrl'
    })
    .when('/booksBio',{
      templateUrl:'booksBio/booksBio.html',
      controller:'genInfoCtrl'
    })
    .when('/genres',{
      templateUrl:'genres/genres.html',
      controller:'genInfoCtrl'
    })
    .when('/booksBio/:bookId',{
      templateUrl: 'booksBio/booksBioDetail.html',
      controller: 'bookDetailCtrl'
    })
    .when('/authorsBio/:authorId',{
      templateUrl: 'authorsBio/authorsDetail.html',
      controller: 'authorsBioCtrl'
    })
    .when('/genres/:genreId',{
      templateUrl: 'genres/genreDetail.html',
      controller: 'bookDetailCtrl'
    })
    .otherwise({
      redirectTo:'/books'
    })
}]);
