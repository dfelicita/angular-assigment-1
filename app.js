(function () {
'use strict';

	angular.module('LunchApp', [])
	.controller('LunchController', LunchController);

	LunchController.$inject = ['$scope'];
	$scope.menu = "";
	function LunchController($scope) {
	  	
		$scope.click = function(){
			console.log('Click!!!');
		}

	}

})();
