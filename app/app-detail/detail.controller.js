var app = angular.module('testApp', []);   
app.controller('testController', function ($scope, $http) {
 $http.get('test_data.json').success(function(data) {
$scope.detail = data;
}); 

});