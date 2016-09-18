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

app.controller('DashboardController', function($scope) {
  $scope.message = 'Hello from Dashbaord';
});

app.controller('efcController', function($scope) {
  $scope.message = 'Hello from efc';
  $scope.sar = sarObject;
  $scope.totalLoan = sarObject.loans.direct + sarObject.loans.subsidized + sarObject.loans.unsubsidized + sarObject.loans["combined loans"];

});

app.controller('repaymentController', function($scope) {
  $scope.loan = 15000;  
  $scope.interest= 2;  
  $scope.payment = 200;    
  $scope.duration = function() {
    var calc = (Math.log($scope.payment) - Math.log($scope.payment - $scope.loan * $scope.interest / 100.0 / 12)) /
            Math.log(1 + $scope.interest / 100.0 / 12);
    if (isNaN(calc)) {
      return "Impossible to pay off principal."
    } else {
      var years = Math.floor(calc / 12);
      var months = Math.ceil(calc % 12);
      var yearString = years == 1 ? years + " year" : years + " years";
      var monthString = months == 1 ? months + " month" : months + " months";
      return yearString + ", " + monthString;
    }    
  };	
});

app.controller('profileController', function($scope, $http) {
  $scope.message = 'Hello from profile';
  $scope.user = {};
  $http.get(capOneApi + "/customers/" + sampleUserId + "?key=" + capOneKey)    
    .success(function(data) {
      data.sar = sarObject;
      $scope.user = data;
    })
    .error(function(error) {
      console.log(error);
    });
});

app.controller('navController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
    $scope.testVar = $location.path();
});

var sarObject = {
  "ombNo" : "1845-0001",
  "EFC": 1250,
  "loans": {
    "direct": 1000,
    "subsidized": 1000,
    "unsubsidized": 1000,
    "combined loans": 1000
  },
  "dob": "07/04/1992",
  "phone": "317-555-2190",
  "email": "testUser@gmail.com",
  "currentYear": "Sophomore"
};

