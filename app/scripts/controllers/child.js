'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:ChildCtrl
 * @description
 * # ChildCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('ChildCtrl', function ($scope, $location, $routeParams, ChildrenSrv) {
    var childId = $routeParams.childId;

    $scope.child = ChildrenSrv.getChild(childId);
    $scope.presents = ChildrenSrv.getPresents(childId);
  });
