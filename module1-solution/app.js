(function(){
'use strict';

angular.module('LunchCheckApp',[])

.controller('LunchCheckController',function($scope){
  $scope.name = "list comma separated dishes you usually have for lunch";
  $scope.wcount = 0;
  console.log($scope.name);

  $scope.countWords = function(){
    var wc = arrLength($scope.name);
    $scope.wcount = wc;
  };

  function arrLength(string){
    var arr = string.split(',');
    var count = arr.length;
    return count;
  }
});

})();
