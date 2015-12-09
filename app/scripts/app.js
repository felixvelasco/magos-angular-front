'use strict';

/**
 * @ngdoc overview
 * @name magosApp
 * @description
 * # magosApp
 *
 * Main module of the application.
 */
angular
  .module('magosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl'
      })
      .when('/children', {
        templateUrl: 'views/children.html',
        controller: 'ChildrenCtrl'
      })
      .when('/child/:childId', {
        templateUrl: 'views/child.html',
        controller: 'ChildCtrl'
      })
      .when('/otherkids', {
        templateUrl: 'views/otherkids.html',
        controller: 'KidsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
