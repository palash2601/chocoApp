angular.module('ChocoApp',['ngRoute','ngResource','CtrlModule'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		//templateUrl:'partials/allProducts.html',
		templateUrl:'partials/Coming_Soon.html',
		controller: 'AllProductsCtrl'
	})
	.when('/product/:id',{
		templateUrl:'partials/product.html',
		controller: 'ProductCtrl'
	})
	.otherwise({
	    redirectTo: '/'
	  });
}]);