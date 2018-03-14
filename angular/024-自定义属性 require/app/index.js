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
			this.addBook = function(){
				$scope.$apply(function(){
					$scope.books.push({
						name:'angularJs'
					});
				})
			};
		},
		controllerAs:'bokListController',
		template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace:true
	};
});

app.directive('bookAdd',function(){
	return{
		restrict:'ECAM',
		template:'<button type="button">添加</button>',
		replace:true,
		require:'^bookList',       //加上^表示在父级元素上面找
								   //不加表示在同级别上面找
								   //加上？表示	指令是可选的，没找到不用抛出异常
		link:function(scope,iElement,iAttrs,bokListController){
			iElement.on('click',bokListController.addBook);
		}
	};
});

app.controller('firstController', ['$scope',
	function($scope	){}
]);
