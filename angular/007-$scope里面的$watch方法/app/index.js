var app = angular.module('myApp' , []);
app.controller('firstController',['$scope',
	function($scope){
		$scope.status = false;
		$scope.statusChange = function(){
			$scope.status = !$scope.status;
		};
		$scope.defaultStyle = {
			'color':'red',
			'margin-top': '100px'
		}
	}
]);