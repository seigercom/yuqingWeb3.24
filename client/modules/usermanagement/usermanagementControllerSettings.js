"use strict";
CQ.mainApp.usermanagementController
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	    $stateProvider
	        .state("usermanagementController", {
	            url:"/umanagement",
	            templateUrl: "/static/modules/usermanagement/pages/u_management.html",
	            controller: "usermanagementController",
	            permission:"2"
	        });
	        // .state("usermanagementController", {
	        //     url:"/management",
	        //     templateUrl: "/static/modules/usermanagement/pages/a_management.html",
	        //     controller: "usermanagementController",
	        //     permission:"3"
	        // });
	}]);