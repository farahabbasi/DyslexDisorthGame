'use strict';

/**
 * @ngdoc function
 * @name adminDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminDashboardApp
 */
angular.module('adminDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
