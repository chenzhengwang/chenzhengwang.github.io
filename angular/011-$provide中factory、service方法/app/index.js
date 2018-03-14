var myApp = angular.module('myApp',[],function($provide){
	console.log('1');
	//自定义服务
	$provide.provider('CustomServices',function(){
		this.$get = function(){
			return{
				message:'CustomServices Message'
			}
		}
	});
});
myApp.controller('firstController',['$scope','CustomServices',
	function prpepare($scope,CustomServices){
		$scope.name = "张三";
		console.log(CustomServices);
	}
	]);