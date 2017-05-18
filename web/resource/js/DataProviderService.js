/**
 * Created by khanhafizurrahman on 5/13/17.
 */

var myApp = angular.module("myapp",[]);

var point1_x = 0.0;
var point1_y = 25.0;
var point2_x = 8.5;
var point2_y = 23.4;
var point3_x = 13.0;
var point3_y = 21.0;
var point4_x = 19.0;
var point4_y = 15.5;

myApp.controller('ControllerOne',['$scope', function ($scope ) {
    // $scope.goCats = false;
}]);


myApp.factory('commonDataProviderService',['$rootScope',function ($rootScope) {
    console.log('inside factory');
    var sharedValueService = {};
    sharedValueService.radiusOfCircle = 20;
    sharedValueService.upperMoldDieData = [{"x":point1_x,  "y":point1_y},
        {"x":point2_x,  "y":point2_y},
        {"x":point3_x,  "y":point3_y},
        {"x":point4_x,  "y":point4_y}];

    sharedValueService.upperMoldInsertData = [{},
                                              {},
                                              {}];

    sharedValueService.lowerMoldDieData = [{},
                                           {},
                                           {}];

    sharedValueService.lowerMoldInsertData = [{},
                                              {},
                                              {}];

    sharedValueService.nameOfbroadcast = '';

    sharedValueService.prepForMoldDataBroadcast = function (nameOfData, currentData){
        this.nameOfbroadcast = nameOfData +  'Broadcast';
        switch(nameOfData){
            case "upperMoldDieData" : this.upperMoldDieData = currentData.slice();
                $rootScope.$broadcast('handleUpperMoldDieDataBroadcast'); break;
            case "upperMoldDieData" : this.upperMoldInsertData = currentData.slice();
                $rootScope.$broadcast('handleUpperMoldInsertDataBroadcast'); break;
            case "upperMoldDieData" : this.lowerMoldDieData = currentData.slice();
                $rootScope.$broadcast('handleLowerMoldDieDataBroadcast'); break;
            case "upperMoldDieData" : this.lowerMoldInsertData = currentData.slice();
                $rootScope.$broadcast('lowerMoldInsertDataBroadcast'); break;
        }
    }
    sharedValueService.prepForCircleRadiusBroadcast = function(radius){
        console.log('into service');
        this.radiusOfCircle = radius;
        this.broadCastCircleRadius();
    }

    sharedValueService.broadCastCircleRadius = function () {
        $rootScope.$broadcast('handleCircleRadiusBroadcast');
    }


    return sharedValueService;
}]);

myApp.controller('circleInputController',['$scope','commonDataProviderService', function ($scope,commonDataProviderService ) {
   $scope.$watch('radius',function (radius) {
       console.log(radius);
       commonDataProviderService.prepForCircleRadiusBroadcast(radius);
   })

}]);

myApp.controller('upperMoldDieInputController',['$scope','commonDataProviderService', function($scope,commonDataProviderService){

    $scope.upperMoldDieDataC = commonDataProviderService.upperMoldDieData;

    $scope.$watch('upperMoldDieDataC', function(data){
        console.log(data);
        commonDataProviderService.prepForMoldDataBroadcast('upperMoldDieData',data);
    },true);
}]);