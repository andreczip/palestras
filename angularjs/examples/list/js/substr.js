app.filter('substr', function() {
    return function(input, length) {
      if(input != undefined){
        	return ( input.length >=  length ? input.substring( 0, length ) + '...' : input );
    	} else{
    		return "";
    	}
    }
});