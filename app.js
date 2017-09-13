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
				var array = $scope.menu.split(',');
				var contar = 0;
				array.forEach(function(res, i){
					var tam = res.trim().length;
					if(tam > 0)
						contar++;
				});
    			if(contar > 3){
    				$scope.Response = "Too much!";
    			}else{
    				$scope.Response = "Enjoy!";
    			}
			}else{
				$scope.isRed = true;
				$scope.Response = "Please enter data first";
			}
		};

	}

})();
