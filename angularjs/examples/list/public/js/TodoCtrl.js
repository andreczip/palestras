
function TodoCtrl($scope, TodoService) {

  $scope.list = TodoService.list();

  $scope.addTodo = function() {
    $scope.list.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };


}