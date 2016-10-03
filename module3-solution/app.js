(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  var promise = MenuSearchService.getMatchedMenuItems();
  var item_name = ["",""];
  var description;

  var searchValue = "ton";
  function containsFilter(value) {
    return value.indexOf(searchValue) !== -1;
  }

  promise.then(function (response) {
    menu.results = response.data;
    menu.results = menu.results.menu_items;

    description = response.data;
    description = description.menu_items;
    console.log(description);

    var searchedMenu = {};
    searchedMenu.name = [];
    searchedMenu.short_name = [];
    searchedMenu.description = [];

    for(var i=0;i<description.length;i++){
        searchedMenu.name[i] = description[i].name;
        searchedMenu.short_name[i] = description[i].short_name;
        searchedMenu.description[i] = description[i].description;
    }

    
    console.log(searchedMenu);
    menu.searchedMenu = searchedMenu;//description.filter(containsFilter);
    console.log("Searched menu: ", menu.searchedMenu);

  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    // process result and only keep items that match
    var foundItems = $http({
      method: "GET",
      url: (ApiBasePath)
      // ,
      // params: {
      //   description: "chicken"
      // }
    });
    console.log(foundItems);
    //console.log(foundItems);
    return foundItems;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });
    $scope.results = response;
    return response;
  };

}

})();
