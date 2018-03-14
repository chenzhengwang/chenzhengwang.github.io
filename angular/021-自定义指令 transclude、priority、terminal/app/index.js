var app = angular.module("myApp",[]);

app.directive('customTags',function(){
	return{
		restrict:'ECAM',
		template:'<div>新数据 <span ng-transclude></span></div>',
		replace:'true',
		transclude:'true'  //一般情况下原始数据会被新数据代替，这个属性用于保留原始数据，
						   // 之后可以将其运用 ng-transclude 指令绑定到新的标签上面
						   
		priority：'-1'        //设置指令在模板中的执行顺序，顺序是相对于元素上其他指令而言，
						   //默认为0,从大到小的顺序依次执行 ng-repear默认为1000
	};
});

app.controller('firstController', ['$scope',
	function($scope){
		$scope.name = '张三';
	}
]);