app.controller('ComicController', ['$scope', 'marvel', '$routeParams', function($scope, marvel, $routeParams) {
  marvel.getId([$routeParams.id]).success(function (data) {
    $scope.detail = data.data.results[0];
  });
}]);