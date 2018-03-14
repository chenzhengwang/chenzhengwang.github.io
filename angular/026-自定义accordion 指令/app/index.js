var app = angular.module('myApp',[]);

//数据
app.factory('Data',function(){
	return [
		{
			title:'no1',
			content:'no1-content'
		},
		{
			title:'no2',
			content:'no2-content'
		},
		{
			title:'no3',
			content:'no3-content'
		}
	];
});

//控制器
app.controller('firstController',['$scope','Data',
	function($scope,Data){
		$scope.data = Data;
	}
]);

//指令
app.directive('kittencupGroup',function(){
	return {
		restrict:'ECMA',
		replace:'true',
		template:'<div class="panel-group" ng-transclude></div>',
		transclude:true
	};
});

app.directive('kittencupCollapse',function(){
	return {
		restrict:'ECMA',
		replace:'true',
		templateUrl:'tmp/kittencupCollapse.html',
	};
});