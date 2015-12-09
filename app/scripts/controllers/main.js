'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ES6'
    ];
  });
