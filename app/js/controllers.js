'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http){

	$http.get('phones/phone.json').success(function(data){
		$scope.phones = data.splice(0, 2);
	});

	$scope.orderProp = 'age';
}]);
