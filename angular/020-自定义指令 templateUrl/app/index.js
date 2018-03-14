var app = angular.module("myApp",[]);

app.directive('customTags',function(){
	return{
		restrict:'ECAM',
		templateUrl:'tmp/other.html',
		replace:'true'
	};
});

app.controller('firstController', ['$scope',
	function($scope){
		$scope.name = '张三';
	}
]);