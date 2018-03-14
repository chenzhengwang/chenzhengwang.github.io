var myApp = angular.module('myApp',[]);


myApp.controller('firstController',['$scope','$filter'
	function prepare($scope , $filter){
		$scope.today = new Date;
		$scope.message = 'AwAA';
		$scope.city = [
			{
				name :'上海',
				py:'shanghai'
			},
			{
				name :'北京',
				py:'beijing'
			},
			{
				name :'四川',
				py:'sichuan'
			}
		];

		//filter 自定义方法
		$scope.checkName = function(obj){
			if(obj.pyindexOf('h') === -1){
				return false;
			}else{
				return true;
			}
		}
	}
]);
