(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function DIController ($scope,
                       $injector) {
  $scope.name = "Yaakov";

  $scope.wordcount = function () {
    var n = 1;
    console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3
    n = n + $scope.name.match(/,/g) || []).length);
  };

  console.log($injector.annotate(LunchCheckController));
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}
$scope.split = function () {
  var mySplit = $filter('split', function(input, splitChar, splitIndex) {
    return input.split(splitChar)[splitIndex];
  }
  $scope.name = mySplit($scope.name);
};

// .filter('split', function() {
//     return function(input, splitChar, splitIndex) {
//         // do some bounds checking here to ensure it has that index
//         return input.split(splitChar)[splitIndex];
//     }

console.log(DIController.toString());

})();
