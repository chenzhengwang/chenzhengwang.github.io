var app = angular.module("myApp",[]);

app.directive('bookList',function(){
	return {
		restrict:'ECMA',
		controller:function($scope){
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
		},
		controllerAs:'bokListController',
		template:'<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
		replace:true
	};
});

app.controller('firstController', ['$scope',
	function($scope	){}
]);
function firstController(){
	this.name = "czw";
}