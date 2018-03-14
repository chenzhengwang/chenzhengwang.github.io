var app = angular.module("myApp",[]);

app.factory('CustomService',function($window){
	console.log($window);
})

//显示的依赖注入，推荐使用
app.controller('firstController' ,['$scope','CustomService',
	function prepare($scope,CustomServicewindow){
		$scope.data = Data;
	}
]);

//隐示的依赖注入
.controller('firstController' , function($scope){

});

function otherController(){
	console.log($scope);
}