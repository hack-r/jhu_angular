(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingList', ShoppingListProvider)
.config(Config);

Config.$inject = ['ShoppingListProvider'];
function Config(ShoppingListProvider) {
  ShoppingListProvider.defaults.maxItems = 10;
}

ToBuyController.$inject = ['ShoppingList'];
function ToBuyController(ShoppingList) {
  var list = this;

  list.items = ShoppingList.getItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    try {
      ShoppingList.addItem(list.itemName, list.itemQuantity);
    } catch (error) {
      list.errorMessage = error.message;
    }
  }

  list.removeItem = function (itemIndex) {
    try{
      ShoppingList.removeItem(itemIndex);
    } catch(error){
      list.errorMessage = error.message;
    }
  };
}

AlreadyBoughtController.$inject = ['ShoppingList'];
function AlreadyBoughtController(ShoppingList){
  var list = this;
  list.bought = ShoppingList.getBought();

  list.message = ""
  console.log(list.bought.length);

  list.itemName = "";
  list.itemQuantity = "";

  list.removeItem = function(itemIndex){
    ShoppingList.removeItem(itemIndex);
  };

}

// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [
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

  var bought=[];
  var empty=[];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    var currItem = items[itemIndex];
    bought.push(currItem);

    items.splice(itemIndex, 1);
    if(items.length > 0){void(0)
    } else {
          throw new Error("Nothing left to buy!");
        }

  };

  service.getItems = function () {
    return items;
  };

  service.getBought = function(){
    return bought;
  };
}


function ShoppingListProvider() {
  var provider = this;

  provider.defaults = {
    maxItems: 100
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.maxItems);

    return shoppingList;
  };
}

})();
