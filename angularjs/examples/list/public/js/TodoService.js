var app = angular.module('myApp', []);

app.service('TodoService', function($http, $q){

	this.list = function(){

		var deferred = $q.defer();

		$http({method: 'GET', url: 'lists'}).success(function(data) {
			deferred.resolve(data);
      	}).error(function(){
 			deferred.reject("An error occured while fetching items");
      	});

      	return deferred.promise;
	};

	this.add = function(todoText) {
		$http({method: 'POST', url: 'lists', data: {text:todoText}}).
			error(function() {
				console.log('Error Save');
		});
	}

});