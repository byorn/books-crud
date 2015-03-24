<!doctype html>
<html lang="en" ng-app="myApp" class="no-js">

<head>



</head>


<body>

<ul class="menu">
    <li><a href="#/view1">view1</a></li>
    <li><a href="#/view2">view2</a></li>
</ul>

<div ng-view></div>


<div>Angular seed app: v<span app-version></span></div>


<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
<script src="https://code.angularjs.org/1.3.15/angular-route.min.js"></script>


<script src="app.js"></script>
<script src="view1/view1.js"></script>
<script src="view2/view2.js"></script>


</body>

</html>