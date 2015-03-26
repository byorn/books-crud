/**
 * Created by byorn on 3/24/15.
 */
'use strict';
angular.module('myApp.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', function($scope, $http) {
        $http.get('home/view1.json')
            .then(function(res){
                $scope.books = res.data;                
            });
        
        
    });