var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){
    $scope.todo = {};
    $scope.todos = [];

    $scope.AddToDo = function (){
        $scope.todos.push({event: $scope.todo_event, time: $scope.todo_time, done: false});
        $scope.todo_event = "";
        $scope.todo_time = "";
    };

    $scope.clear = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };


}]);