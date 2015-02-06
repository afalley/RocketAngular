'use strict'
angular.module('myApp', [])


.controller('RocketController', function ($scope) {

	$scope.items = [
		'work on my code',
		'play guitar',
		'write a song',
		'record a song',
		'do the dishes'
	];

	$scope.addTask = function(task){

		$scope.items.push(task);
		this.task="";
	}
	
})