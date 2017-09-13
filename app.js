(function () {
'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope) {
	  	$scope.menu = "";
	  	$scope.Response = "";
	  	$scope.isRed = true;

		$scope.click = function(){
			if($scope.menu.length > 0){
				$scope.isRed = false;
				$scope.Response = "OK";
				var array = menu.split(',');
    			console.log('array', array);
			}else{
				$scope.isRed = true;
				$scope.Response = "Please enter data first";
			}
		};

	}

})();
