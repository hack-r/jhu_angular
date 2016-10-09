(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
