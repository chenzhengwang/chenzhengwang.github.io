var app = angular.module("myApp",[]);

app.directive('customTags',function(){
	return{
		restrict:'E',
		template:'<div>@@@@@@@@@@@@</div>',
		replace:'true'
	};
});

app.controller('firstController', ['$scope',
	function($scope){

	}
]);