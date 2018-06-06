'use strict';

angular.module('myApp.genres', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/genres', {
    templateUrl: 'genres/genres.html',
    controller: 'genInfoCtrl'
  });
}])


// Authors by genres
 app.controller('authorsByGenreCtrl',[ '$scope', 'books', function($scope, books) {
       $scope.genres=books.allGenres();
       // console.log($scope.genres);
       $scope.authorsByGenre=function(genre){
       return books.authorsByGenre(genre)
         }
         console.log($scope.genres)
 }]);

 // Load genre details
 app.controller('genreDetailCtrl',[ '$scope', '$routeParams', 'books', function($scope, $routeParams, books) {
     $scope.books = books.genreById($routeParams.genreId);
     // console.log($scope.books);
 }]);

// Load books by genre
app.controller('booksByGenreCtrl',[ '$scope', 'books', function($scope, books) {
      $scope.booksByGenre=books.booksByGenre($scope.books.genre);
}]);

//Вывод авторов в данном жанре.  Authors in this genre
app.controller('authorInGenreCtrl',[ '$scope', 'books', function($scope, books) {
      $scope.authorByGenre=books.authorByGenre($scope.books.genre);
}]);
