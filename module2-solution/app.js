(function () {
'use strict';

var shoppingList = [
  {
    name: "Cookies",
    quantity: 1
  },
  {
    name: "Milks",
    quantity: 5
  },
  {
    name: "vials of Crack Cocaine",
    quantity: 2
  },
  {
    name: "bottles of Vodka",
    quantity: 3
  },
  {
    name: "Eggs",
    quantity: 1
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
//.service('ShoppingListService', ShoppingListService)
;

ToBuyController.$inject = ['$scope'];
//ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController($scope) {
  $scope.shoppingList = shoppingList;
}

AlreadyBoughtController.$inject = ['$scope'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController($scope) {
  $scope.shoppingList = shoppingList;
  console.log(shoppingList);
}
function ShoppingListService() {
  service.removeItem = function (itemIndex) {
  items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
  return shoppingList;
}
function ShoppingListCheckOffService() {
  var shoppingList = [
    {
      name: "Cookies",
      quantity: 1
    },
    {
      name: "Milks",
      quantity: 5
    },
    {
      name: "vials of Crack Cocaine",
      quantity: 2
    },
    {
      name: "bottles of Vodka",
      quantity: 3
    },
    {
      name: "Eggs",
      quantity: 1
    }
  ];
  var factory = function () {
    return new ShoppingListService();
    //console.log();
  };

  return factory;
}

})();
