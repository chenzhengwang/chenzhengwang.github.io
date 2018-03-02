var myModule = angular.module("Cart" , []);
myModule.controller("cartController" , ['$scope',
	function cartController($scope){
		$scope.cart = [
		{
			id:1000,
			name:'iphone5',
			quantity:'3',
			price:'4300'
		},
		{
			id:3300,
			name:'iphone5',
			quantity:'30',
			price:'3300'
		},
		{
			id:232,
			name:'imac',
			quantity:'3',
			price:'23000'
		},
		{
			id:1000,
			name:'ipad',
			quantity:'3',
			price:'6900'
		}
		];
	/**
	 *	计算购物总价
	*/
		$scope.totalPrice = function(){
			var total = 0;
			angular.forEach($scope.cart,function(item){
				total += item.quantity * item.price;
			});
			return total;
		};
	/**
	 *	计算购物总价
	*/
		$scope.totalQuantity = function(){
			var total = 0;
			angular.forEach($scope.cart,function(item){
				total += parseInt(item.quantity);
			});
			return total;
		}
	}
]);




