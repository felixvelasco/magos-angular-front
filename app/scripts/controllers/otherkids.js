'use strict';

/**
 * @ngdoc function
 * @name magosApp.controller:KidsCtrl
 * @description
 * # KidsCtrl
 * Controller of the magosApp
 */
angular.module('magosApp')
  .controller('KidsCtrl', function ($scope) {

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
