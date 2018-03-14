var app = angular.module("myApp",[]);

app.directive('bookList',function(){
	return {
		restrict:'ECMA',
		controller:function($scope){

		},
		//为假为空一个作用域，为真为不同作用域，但是可继承父作用域
		// scope:true,
		// 当为对象是也会创建一个独立作用域，但是它可以继承父作用域，但是没法享受集成链
		scope:{

		},
		controllerAs:'bokListController',
		template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
		replace:true
	};
});


app.controller('firstController', ['$scope',
	function($scope	){
		$scope.books = [
			{
				name:'php'
			},
			{
				name:'javascript'
			},
			{
				name:'java'
			}
		];
	}
]);
