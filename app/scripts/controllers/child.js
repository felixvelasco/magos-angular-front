'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:ChildCtrl
 * @description
 * # ChildCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('ChildCtrl', function ($scope, $location, $routeParams) {
    var childId = $routeParams.childId;

    $scope.child = {
        name: 'Carolina',
      };
    $scope.presents = [
      {
        name: 'Lucas',
        url: 'http://www.amazon.es/gp/product/B00IARP3UM?keywords=lucas&qid=1449682522&ref_=sr_1_1&sr=8-1',
        img: 'http://ecx.images-amazon.com/images/I/51q5Tk-EPlL._SL1024_.jpg',
        description: 'Lucas, el amigo de Nancy',
        price: 21.48,
      },
      {
        name: 'Estuche Descendientes',
        description: 'Un estuche de la nueva pelicula de Disney, los Descendientes',
      }
    ]

  });
