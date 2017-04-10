angular.module('assessment').controller('shopCtrl', function($scope, shopService) {
    $scope.getProducts = function() {
    shopService.getProducts().then(function(response) {
      $scope.products = response;
    })
  }
  $scope.getProducts();
});