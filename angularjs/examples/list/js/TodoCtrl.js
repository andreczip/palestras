
function TodoCtrl($scope, TodoService) {

  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];

  $scope.list = TodoService.list();

  $scope.addTodo = function() {
    console.log($scope.list)
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };


}