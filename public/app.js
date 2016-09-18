var app = angular.module('mySAR', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/dashboard', {
    templateUrl : 'dashboard.html',
    controller  : 'DashboardController'
  })
  .otherwise({redirectTo: '/dashboard'});
});

app.controller('DashboardController', function($scope) {
  $scope.message = 'Hello from Dashbaord';
});
