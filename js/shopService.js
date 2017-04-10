angular.module('assessment').service('shopService', function($http, $stateParams) {
    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        }).then(function(response) {
            console.log(response.data);
            return response.data;
        })
    }
    this.getProductInfo = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + $stateParams.id
        }).then(function(response) {
            console.log(response)
            return response;
    })
  }
});