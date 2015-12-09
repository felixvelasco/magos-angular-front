'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
