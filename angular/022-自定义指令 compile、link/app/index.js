var app = angular.module("myApp",[]);

app.directive('customTags',function(){
	return{
		restrict:'ECMA',
		template:'<div>aaa</div>',
		replacr:'true',
		compile:function(){
			console.log('$$$$$$$');
		},
		link:function(){

		}
	};
});
app.directive('customTags2',function(){
	return{
		restrict:'ECMA',
		template:'<div>aaa</div>',
		replacr:'true',
		compile:function(){

		},
		link:function(){

		}
	};
});
app.controller('firstController', ['$scope',
	function($scope){
		$scope.users = [
			{
				id:10,
				name:'张三'
			},
			{
				id:11,
				name:'李四'
			}
		];
	}

]);