'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('SummaryCtrl', function ($scope) {
    $scope.children = [
      {
        name: 'Carolina',
        state: '5 regalos pendientes',
      },
      {
        name: 'Diego',
        state: '2 regalos pendientes',
      },
    ];
    $scope.kids = [
      {
        name: 'Aitana',
        state: '0 regalos no adscritos',
        present: true,
      },
      {
        name: 'Patricia',
        state: '4 regalos no adscritos',
        present: false,
      },
      {
        name: 'Hugo',
        state: '2 regalos no adscritos',
        present: true,
      },
    ];
  });
