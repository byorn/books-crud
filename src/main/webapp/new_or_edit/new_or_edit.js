/**
 * Created by byorn on 3/24/15.
 */
'use strict';
angular.module('myApp.new_or_edit', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/new_or_edit', {
            templateUrl: 'new_or_edit/new_or_edit.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', function() {
    });