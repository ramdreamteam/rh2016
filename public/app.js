var app = angular.module('mySAR', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/dashboard', {
    templateUrl : 'dashboard.html',
    controller  : 'DashboardController'
  })
  .when('/efc', {
    templateUrl : 'expected.html',
    controller  : 'efcController'
  })
  .when('/repayment', {
    templateUrl : 'repayment.html',
    controller  : 'repaymentController'
  })
  .otherwise({redirectTo: '/dashboard'});
});

app.controller('DashboardController', function($scope) {
  $scope.message = 'Hello from Dashbaord';
});

app.controller('efcController', function($scope) {
  $scope.message = 'Hello from efc';
});

app.controller('repaymentController', function($scope) {
  $scope.message = 'Hello from repayment';
});
