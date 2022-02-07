app.controller("MainController", [
   "$scope",
   "marvel",
   "$http",
   function ($scope, marvel) {
      $scope.loader = true;
      $scope.notFound = false;
      
      marvel.search().success(function (data) {
         $scope.marvel = data;
         $scope.loader = false;
         $scope.notFound = false;
      });
      
      $scope.searchAPI = function (search) {
         $scope.loader = true;
         $scope.notFound = false;
         
         marvel.search(search).success(function (data) {
            $scope.marvel = data;
            $scope.loader = false;
            if (!data.data.count) {
               console.log('asdas');
              $scope.notFound = true;
            }
         });
      }
  },
]);