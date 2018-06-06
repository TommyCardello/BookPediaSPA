'use strict';

angular.module('myApp.booksBio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booksBio', {
    templateUrl: 'booksBio/booksBio.html',
    controller: 'genInfoCtrl'
  });
}])

//Подгрузка деталей конкретной книги. Load Book details
 app.controller('bookDetailCtrl',[ '$scope', '$routeParams', 'books', function($scope, $routeParams, books) {
     $scope.books =  books.bookById($routeParams.bookId);
     // console.log($scope.books);
 }]);
