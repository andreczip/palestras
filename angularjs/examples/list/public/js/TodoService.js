var app = angular.module('myApp', []);

app.service('TodoService', function($http){

 //    this.list= function(){
 //    	//
	// 	$http({method: 'GET', url: ''}).
	// 	  success(function(data, status, headers, config) {
	// 	    console.log(data);
	// 	  }).
	// 	  error(function(data, status, headers, config) {
	// 	    console.log('Error', config);
	// 	  });


	// };

	this.list = function() {
		var url = "http://api.icndb.com/jokes/?callback=JSON_CALLBACK";

		$http.jsonp(url)
		.success(function(data){
			console.log(data);
		}).error(function(data){
			console.log('Error');
		});
	};

});