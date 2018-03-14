var product = angular.module("product" , []);
product.service('productData',function(){
	return[
		{
			id:333,
			name:'iphone',
			price:5400

		},		
		{
			id:885,
			name:'ipad',
			price:3420

		},		
		{
			id:980,
			name:'imac',
			price:15400

		},		
		{
			id:1212,
			name:'ipad air',
			price:2340

		},		
		{
			id:3424,
			name:'ipad mini',
			price:2200

		}
	]
});
product.controller('productController',['$scope' ,'productData',
	function prepare($scope ,productData){
		$scope.data =  productData;
		console.log($scope.data)
	}
]);