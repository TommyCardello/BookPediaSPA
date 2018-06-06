'use strict';

angular.module('myApp.books', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
   	.when('/books',{
      templateUrl:'books/books.html',
      controller:'genInfoCtrl'
    })
}])

// кнопка search функция скрыть-показать. Show/Hide search button
app.controller('searchCtrl', function($scope){
	$scope.mySearch = true;
	$scope.toggle = function(){
		$scope.mySearch = !$scope.mySearch;
	};
});

//Основой массив с книгами. Main books array
app.controller('genInfoCtrl',[ '$scope', 'books', function($scope, books) {
    $scope.books = books.booksArray;
}]);

//Подгрузка деталей конкретного автора. Load author details
app.controller('authorsBioCtrl',[ '$scope', '$routeParams', 'books', function($scope, $routeParams, books) {
    $scope.authors =  books.authorById($routeParams.authorId);
}]);