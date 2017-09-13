(function () {
'use strict';

angular.module('Lunch-app', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
$scope.menu = "";
function Check() {
  console.log('Click');
}

})();
