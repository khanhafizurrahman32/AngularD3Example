/**
 * Created by khanhafizurrahman on 5/13/17.
 */

var myApp = angular.module("myapp",[]);


myApp.controller('ControllerOne',['$scope', function ($scope ) {
    // $scope.goCats = false;
}])


myApp.factory('commonDataProviderService',['$rootScope',function ($rootScope) {
    console.log('inside factory');
    var sharedValueService = {};
    sharedValueService.radiusOfCircle = 20;

    sharedValueService.prepForCircleRadiusBroadcast = function(radius){
        console.log('into service');
        this.radiusOfCircle = radius;
        this.broadCastCircleRadius();
    }

    sharedValueService.broadCastCircleRadius = function () {
        $rootScope.$broadcast('handleCircleRadiusBroadcast');
    }


    return sharedValueService;
}])

myApp.controller('circleInputController',['$scope','commonDataProviderService', function ($scope,commonDataProviderService ) {
   $scope.$watch('radius',function (radius) {
       console.log(radius);
       commonDataProviderService.prepForCircleRadiusBroadcast(radius);
   })

}])