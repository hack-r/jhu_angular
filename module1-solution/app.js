(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);
 LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.name = "list comma separated dishes you usually have for lunch";
  $scope.wcount = 1;
  $scope.message="";
  console.log($scope.name);

  $scope.countWords = function(){
    var wc = arrLength($scope.name);
    $scope.wcount = wc;
  };

  $scope.showMessage = function(){
    if($scope.wcount > 3){
      $scope.message = "Too much!"
    } else{
      $scope.message = "Enjoy!"
    }
  }

  function arrLength(string){
    var arr = string.split(',');
    var count = arr.length;
    return count;
  }
}

})();
