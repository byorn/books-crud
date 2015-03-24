<!doctype html>
<html ng-app="booksApp">

<head>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="js/controllers.js"></script>
</head>


<body ng-controller="BooksController">

<ul>
    <li ng-repeat="book in books">
        <span>{{book.name}}</span>
        <p>{{book.author}}</p>
    </li>
</ul>

</body>

</html>