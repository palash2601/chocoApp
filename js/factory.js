angular.module('DataService',[])
.factory('DataService',['$resource','$q','$http',function($resource,$q,$http){
	return {
		getChocoData : function () {
			var deferred = $q.defer();
			var promise = $http.get('../choco.json',{ cache: true})
			 	.success(function(data){
			 		deferred.resolve(data);
			 	})
			 	.error(deferred.reject);	
			return deferred.promise;
		}
	}
}]);