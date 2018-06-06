'use strict';

angular.module('myApp.authorsBio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/authorsBio', {
    templateUrl: 'authorsBio/authorsBio.html',
    controller: 'authorsBioCtrl'
  })
  .when('/authorsBio/:authorId',{
      templateUrl: 'authorsBio/authorsDetail.html',
      controller: 'authorsBioCtrl'
    })
}]);

//Вывод книг автора. Author books
app.controller('authorBooks',[ '$scope', 'books', function($scope, books) {
      $scope.booksByAuthor=books.booksByAuthor($scope.authors.author);
}]);

//Вывод жанров автора.  Author genres
app.controller('authorGenresCtrl',[ '$scope', 'books', function($scope, books) {
      $scope.authorGenres=books.authorGenres($scope.authors.author);
      $scope.genres=books.allGenres();
      $scope.authorsByGenre=function(genre){
      return books.authorsByGenre(genre)
        }
}]);

//Подгрузка списка авторов. List of authors
app.controller('authorsInfoCtrl',['$scope', 'books', function($scope, books){
      $scope.names=books.authorsArray;
}])
