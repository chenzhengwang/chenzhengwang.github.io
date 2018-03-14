var myApp = angular.module('myApp',[]);

myApp.factory('data',function(){
	return {
		name:"czw",
	};
});
myApp.controller('firstController',['$scope','data',
	function prepare($scope,data){
		$scope.Data = {
			name:"@@@@@@"
		};
		$scope.data = data;
	}
]);
myApp.controller('secondController',['$scope','data',
	function prepare($scope,data){
		$scope.data = data;
		$scope.Data = $scope.$$prevSibling.Data;
	}
]);