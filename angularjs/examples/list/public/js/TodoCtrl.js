
function TodoCtrl($scope, TodoService) {

	$scope.init = function() {
		TodoService.list().then(function(data){
    		$scope.lists = data;
    	});
  	};

	$scope.addTodo = function() {

		TodoService.add($scope.todoText);
		$scope.init();
		$scope.todoText = '';
	};

}