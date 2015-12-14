'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:ChildCtrl
 * @description
 * # ChildCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('ChildCtrl', function ($scope, $routeParams, ChildrenSrv) {
    var childId = $routeParams.childId;

    $scope.child = ChildrenSrv.getChild(childId);
    $scope.presents = ChildrenSrv.getPresents(childId);

    $scope.create = function () {
      ChildrenSrv.addPresent(childId, $scope.name, $scope.description);
      $scope.name='';
      $scope.description='';
    };

  });
