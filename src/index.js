import angular from 'angular';

const app = angular.module('app',[]);
app.controller('ctrl', ['$scope', ($scope) => {
    $scope.name = "ushio";
    $scope.list = [1, 2, 3];
    $scope.click = () => {
        console.log($scope.name);
    }
}]);

app.directive('message', () => {
    return {
        template: "<h1>directive</h1>"
    }
})
