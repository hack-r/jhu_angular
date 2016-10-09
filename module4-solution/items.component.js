(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'items-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
