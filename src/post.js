'use strict';

module.exports = function($scope, $http, $routeParams, $localStorage) {
  if ($routeParams.id < 100) {
  $http.get('https://jsonplaceholder.typicode.com/posts/' + $routeParams.id).
        then(function(response) {
            $scope.posts = response.data;
        });
  } else {
    $scope.posts = $localStorage.posts.find((post)=>{
       return (post.id.toString() === $routeParams.id);
    });
  }
};
