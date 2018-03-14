var myApp = angular.module('myApp',[]);


myApp.controller('firstController',['$scope',
	function prepare($scope){
		$scope.today = new Date;
	}
]);
