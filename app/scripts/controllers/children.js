'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:ChildrenCtrl
 * @description
 * # ChildrenCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('ChildrenCtrl', function ($scope, $location) {
    $scope.children = [
      {
        id:1,
        name: 'Carolina',
        assignedCount: 3,
        pendingCount: 4,
      },
      {
        id:2,
        name: 'Diego',
        assignedCount: 6,
        pendingCount: 1,
      },
    ];
    $scope.showChild = function (id) {
      $location.path('/child/'+ id);
    };
  });
