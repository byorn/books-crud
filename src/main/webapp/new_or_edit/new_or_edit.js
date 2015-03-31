/**
 * Created by byorn on 3/24/15.
 */
'use strict';
angular.module('myApp.new_or_edit', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/new_or_edit', {
            templateUrl: 'new_or_edit/new_or_edit.html',
            controller: 'View2Ctrl'
        }).
        when('/new_or_edit/:bookname/:bookauthour', {
            templateUrl: 'new_or_edit/new_or_edit.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', function($scope,$routeParams,$http) {
    
        $scope.bookname=$routeParams.bookname;
        $scope.bookauthour=$routeParams.bookauthour;
        $scope.submit = function() {
         
            var dataObject = {
                       	bookName: $scope.bookname,
                        bookAuthour:$scope.bookauthour
            };
            
            $http.post('/books', dataObject,{}).
                    success(function(data, status, headers, config) {
                           
                    }).
                    error(function(data, status, headers, config) {
                          
                    });
                
        }
       
      
    });