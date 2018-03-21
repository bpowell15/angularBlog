'use strict';

module.exports = function($scope, $http, $localStorage) {
  $http.get('https://jsonplaceholder.typicode.com/posts').
        then(function(response) {
            $scope.allPosts = response.data;
            if ($localStorage.use) {
              $scope.allPosts = $localStorage.posts;
            }
  });

  $scope.submit = function (title, body, link) {
    $http.post('https://jsonplaceholder.typicode.com/posts').
          then(function(response) {
            if (title === undefined || body === undefined || title === "" || body === "") {
              $scope.titleError = "Title can't be blank.";
              if (body === undefined || body === "") {
                $scope.bodyError = "Body can't be blank.";
              }
              return;
            }
              let id = parseInt($localStorage.posts[$localStorage.posts.length - 1].id) + 1;
              $localStorage.posts = $scope.allPosts;
              $localStorage.posts.unshift({id: id,
                                          title: title,
                                          body: body,
                                          userId: 3.14159
                                        });
              $localStorage.use = true;
              $scope.titleError = "";
              link.$open = !link.$open;
          });
  };

  $scope.close = function(link) {
    link.$open = !link.$open;
    $scope.titleError='';
    $scope.bodyError='';
  };
};
