/**
 * Created by byorn on 3/23/15.
 */
var booksApp = angular.module('booksApp', []);

booksApp.controller('BooksController', function ($scope) {
    $scope.books = [
        {'name': 'Nexus S',
            'author': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'author': 'The Next, Next Generation tablet.'}
        ];
});