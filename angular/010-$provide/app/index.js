var myApp = angular.module('myApp',[],function($provide){

	//自定义服务
	$provide.provider('CustomServices',function(){
		this.$get = function(){
			return{
				message:'CustomServices Message'
			}
		}
	});

	//自定义工厂
	$provide.factory('CustomFactory',function(){
			return [1,2.3,4,5,6,7];
	});

	//自定义服务
	$provide.service('CustomService',function(){
		return ['上海'];
	});
});
myApp.controller('firstController',['$scope','CustomServices','CustomFactory','CustomService',
	function prpepare($scope,CustomServices,CustomFactory,CustomService){
		console.log(CustomService);
		$scope.name = "张三";
		console.log(CustomFactory);
	}
]);