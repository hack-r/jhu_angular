(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'templates/items-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
