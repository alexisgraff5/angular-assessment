angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService){
   $scope.getProductInfo = function() {
    shopService.getProductInfo().then(function(response) {
        console.log(response);
      $scope.product = response.data;
    })
  }
  $scope.getProductInfo();
});