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
        when('/new_or_edit/:id/:bookname/:bookauthour', {
            templateUrl: 'new_or_edit/new_or_edit.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', function($scope,$routeParams) {
    
        $scope.id=$routeParams.id;
        $scope.bookname=$routeParams.bookname;
        $scope.bookauthour=$routeParams.bookauthour;
        $scope.submit = function() {
         
            var dataObject = {
                        id : $scope.id,
                        bookname: $scope.bookname,
                        bookauthour:$scope.bookauthour
            };
            
            $http.post('/someUrl', dataObject,{}).
                    success(function(data, status, headers, config) {
                           
                    }).
                    error(function(data, status, headers, config) {
                          
                    });
                
        }
       
      
    });