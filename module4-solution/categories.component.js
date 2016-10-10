(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
