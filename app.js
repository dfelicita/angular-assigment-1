(function () {
'use strict';

	angular.module('LunchApp', []).controller('LunchController', LunchController);
	LunchController.$inject = ['$scope'];
	
	function LunchController($scope) {
	  	$scope.menu = "";

		$scope.click = function(){
			console.log('Click!!!');
		};

	}

})();
