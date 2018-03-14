var app = angular.module("myApp",[]);

// 	,function($filterProvide){
// 	$filterProvide.register('filterAge',function(){

// 	});

// });
app.filter('filterAge',function(){
	return function(obj){
		console.log(obj);
		var newObj = [];
		angular.forEach(obj,function(o){
			if(o.age > 20){
				newObj.push(o);
			}
		});
		return newObj;
	};
});

app.service('Data',function(){
	return [
		{
			name:"张三",
			age:"20",
			city:"上海"
		},
		{
			name:"李四",
			age:"30",
			city:"北京"
		}

	];
});
app.controller('firstController' ,['$scope','Data',
	function prepare($scope,Data){
		$scope.data = Data;
	}

	]);