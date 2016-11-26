(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$injector = ['$scope'];

	function LunchCheckController($scope) {
		$scope.luncList = [];
		$scope.message = '';

		$scope.checkList = function(luncList) {
			var str = luncList.split(',');

			if (str.length == 0) {
				$scope.message = "Please enter data first";
			} else if (str.length > 3) {
				$scope.message = "Too much!";
			} else {
				$scope.message = "Enjoy!";
			};
		};
	}
})();