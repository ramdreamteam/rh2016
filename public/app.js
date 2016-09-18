var app = angular.module('mySAR', ['ngRoute']);
const capOneApi = "http://api.reimaginebanking.com/enterprise";
const capOneKey = "824c24c68d81a8c3cfae36882a5ba1a9" //HERE YOU GO HACKERS
const sampleUserId = "56c66be5a73e492741507272";

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
  .when('/profile', {
    templateUrl : 'profile.html',
    controller  : 'profileController'
  })
  .otherwise({redirectTo: '/dashboard'});
});

app.controller('DashboardController', function($scope, $http) {
  $scope.message = 'Hello from Dashbaord';

  $http.get(capOneApi + "/customers/" + sampleUserId + "?key=" + capOneKey)    
    .success(function(data) {
      console.log(data);
    })
    .error(function(error) {
      console.log(error);
    });
});

app.controller('efcController', function($scope) {
  $scope.message = 'Hello from efc';
});

app.controller('repaymentController', function($scope) {
  $scope.message = 'Hello from repayment';
});

app.controller('profileController', function($scope) {
  $scope.message = 'Hello from profile';
});

    // nessie user
    // {
    //   "_id": "56c66be5a73e492741507272",
    //   "address": {
    //     "city": "Union",
    //     "state": "Kentucky",
    //     "street_name": "Lakeview Drive",
    //     "street_number": "11028",
    //     "zip": "41091"
    //   },
    //   "first_name": "Allison",
    //   "last_name": "Williams"
    // },

var sarObject = {
  "ombNo" : 1845-0001,
  "EFC": 1250,
  "loans": {
    "direct": 1000,
    "subsidized": 1000,
    "unsubsidized": 1000,
    "combined loans": 1000
  },
  "dob": 07/04/1992,
  "phone": 317-555-2190,
  "email": "testUser@gmail.com",
  "currentYear": "Sophomore"
};

