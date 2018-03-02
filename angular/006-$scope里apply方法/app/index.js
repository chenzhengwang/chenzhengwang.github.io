var firstController = function($scope){

	// $scope 我们叫做作用域
	// 申明一个Model
	$scope.date = new Date();
	$scope.name = '张三';
	// $scope.date = new Date();
	// setInterval(function(){
	// 	$scope.date = new Date();
	// },1000);
	setInterval(function(){
		$scope.$apply(function(){
			$scope.date = new Date();
			//....会去触发脏检查
		})
	},1000)

	// 触发一次脏检查
	// apply触发$eval方法
	// 解析成功后会触发$digest方法
	// $digest就会去触发$watch方法

	watch方法的作用就是手动的去监听一个变量
	而apply作用于一个表达式或者函数
	如果你在AngularJS上下文之外的任何地方修改了model，
	那么你就需要通过手动调用$apply()来通知AngularJS。
	这就像告诉AngularJS，你修改了一些models，希望AngularJS帮你触发watchers来做出正确的响应。
};

