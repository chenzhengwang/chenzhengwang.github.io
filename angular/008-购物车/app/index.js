var myModule = angular.module("Cart" , []);
myModule.controller("cartController" , ['$scope',
	function cartController($scope){
		$scope.cart = [
		{
			id:1000,
			name:'iphone5',
			quantity:3,
			price:4300
		},
		{
			id:3300,
			name:'iphone5',
			quantity:30,
			price:3300
		},
		{
			id:232,
			name:'imac',
			quantity:3,
			price:23000
		},
		{
			id:1400,
			name:'ipad',
			quantity:3,
			price:6900
		}
		];

		$scope.orderType = 'id';
		$scope.order = '-';

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
	 *	计算购物总量
	*/
		$scope.totalQuantity = function(){
			var total = 0;
			angular.forEach($scope.cart,function(item){
				total += item.quantity;
			});
			return total;
		};
		$scope.remove = function(id){
			var index = -1;
			angular.forEach($scope.cart,function(item,key){
				if(id == item.id){
					index = key;
				}
			});
			if(index !== -1){
				$scope.cart.splice(index,1);
			}
		};
		$scope.reduce = function(id,quantity){
			angular.forEach($scope.cart,function(item){
				if (item.id == id) {
					if(item.quantity > 0){
						item.quantity = quantity - 1;
					}else{
						var returnKey = confirm('从购物车内删除该产品')
						if (returnKey) {
							$scope.remove(id);
						}
					}
				}
			});
		};
		$scope.add = function(id,quantity){
			angular.forEach($scope.cart,function(item){
				if (item.id == id) {
					item.quantity = quantity + 1;
				}
			});
		};
		$scope.$watch('cart',function(newValue,oldValue){
			angular.forEach(newValue,function(item,key){
				if(item.quantity < 1){
					var returnKey = confirm('从购物车内删除该产品')
					if (returnKey) {
						$scope.remove(item.id);
					}else{
						item.quantity = oldValue[key].quantity;
					}
				}
			});
		},true);
		/**
		*	按照传入的参数进行排序
		*/
		$scope.changeOrder = function(type){
			$scope.orderType = type;
			alert(type);
			if($scope.order === ''){
				$scope.order = '-';
			}else{
				$scope.order = '';
			}
		}
	}
]);




