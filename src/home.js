'use strict';

module.exports = function($scope, $http, $localStorage) {
  $http.get('https://jsonplaceholder.typicode.com/posts').
        then(function(response) {
            $scope.allPosts = response.data;
            if ($localStorage.use) {
              $scope.allPosts = $localStorage.posts;
            }
  });

  $scope.submit = function (title, body) {
    $http.post('https://jsonplaceholder.typicode.com/posts').
          then(function(response) {
              $localStorage.posts = $scope.allPosts;
              $localStorage.posts.unshift({id: parseInt($localStorage.posts[$localStorage.posts.length - 1].id) + 1, title: title, body: body, userId: 3.14159});
              $localStorage.use = true;
          });
  };


};
