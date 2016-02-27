angular.module('CtrlModule',['DataService'])

.controller('AllProductsCtrl',['$scope','$timeout','DataService',function($scope, $timeout ,DataService){
	console.log('in AllProductsCtrl');
	 var getChocoData = function() {
	 	 DataService.getChocoData().then(function (data) {
	   		$scope.chocoData = data;
	   		console.log(data);
	   });
	  };
	getChocoData(); 
	//angularGridInstance.mypics.refresh();  

	$scope.fireEvent = function(){

        // This will only run after the ng-repeat has rendered its things to the DOM
        $timeout(function(){
        	var $grid = $('.grid').imagesLoaded( function() {
  			// init Masonry after all images have loaded
		  	$grid.masonry({
		    itemSelector: '.grid-item',
			columnWidth: 375			
		  });
			});
        }, 3000);

    };
}])
.controller('ProductCtrl',['$scope','DataService','$routeParams',function($scope,DataService,$routeParams){
	console.log('in AllProductsCtrl');
	 $scope.selectedProductId=$routeParams.id;
}]);
/*.controller('ProductCtrl',['$scope','$location','DataService','$routeParams',function($scope,$location,WeatherService,$routeParams){
	$scope.weatherData = [];
	$scope.DAYS_COUNT = "14";
	$scope.UNIT = "metric";

	// this condition will be called when get weather for current location
	if ($routeParams.lat != undefined && $routeParams.lon != undefined){
		WeatherService.getWeatherForecast().query({lat:$routeParams.lat, lon:$routeParams.lon, units : $scope.UNIT, cnt : $scope.DAYS_COUNT}, function(data){
				data.show = false;
				$scope.weatherData.push(data);
	    	});
	}
	// this condition will be called when get weather for selected cities
	else{
		var citiesList  = $location.search().cities.split(',');
		
	    if (citiesList[0] != ""){
			angular.forEach(citiesList,function(value){
				WeatherService.getWeatherForecast().query({q:value, units : $scope.UNIT, cnt : $scope.DAYS_COUNT}, function(data){
					data.show = false;
					$scope.weatherData.push(data);
		    	});
			});
		}
	}

	// function to show or hide forecast div
	$scope.toogle = function (index) {
		$scope.weatherData[index].show = !$scope.weatherData[index].show;
		for (var i = 0; i < $scope.weatherData.length; i++)
	    {
	    	if (index != i)
	        $scope.weatherData[i].show = false;
	    }

	    //code to scroll page
	    $('html, body').animate({
	        scrollTop: $('.detailedForecast').eq(index).offset().top
	    }, 1500);
	}

	// function to get icon for weather forecast
	$scope.getIconSrc = function (iconId) {
	  return WeatherService.getIconImgPath(iconId);
	};
}]);*/