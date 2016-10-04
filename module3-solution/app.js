(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('founditems', founditemsDirective);

    function founditemsDirective() {
        var ddo = {
            templateUrl: 'founditems.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

    function founditemsDirectiveController() {
        var menu = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.searchTerm = "";
        menu.founditems = "";
        menu.search = function() {
            menu.nothingFound = "";
            if (menu.searchTerm) { // check if empty
                var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm.toLowerCase());
                promise.then(function(founditems) {
                    if (founditems.length == 0) {
                        menu.nothingFound = "Nothing found :-(";
                    }
                    menu.founditems = founditems;
                })

            } else {
                menu.nothingFound = "Nothing found";
                menu.founditems = "";
            }
        };
        menu.removeItem = function(itemIndex) {
            menu.founditems.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });

            return response.then(function(result) {
                var menuData = result.data;
                var founditems = [];
                menuData.menu_items.forEach(function(item) {
                    if (item.description.indexOf(searchTerm) != -1) {
                        founditems.push({
                            name: item.name,
                            short_name: item.short_name,
                            description: item.description
                        });
                    }
                });
                return founditems;
            });
        };
    }

})();
