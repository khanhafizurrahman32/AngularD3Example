/**
 * Created by khanhafizurrahman on 5/14/17.
 */

myApp.directive('selectedParameters',['commonDataProviderService',function(commonDataProviderService){
    var controller = function ($scope){
        $scope.radiusOfCircle = commonDataProviderService.radiusOfCircle;
        $scope.$on ('handleCircleRadiusBroadcast',function () {
            $scope.radiusOfCircle = commonDataProviderService.radiusOfCircle;
        });

        $scope.upperMoldDieData = commonDataProviderService.upperMoldDieData;
        $scope.$on ('handleUpperMoldDieDataBroadcast',function (){
            $scope.upperMoldDieData = commonDataProviderService.upperMoldDieData;
        });

    }
    return{
        restrict: 'E',
        templateUrl: 'resource/html/selected-parameters.html',
        // link: function ($scope, $element, attrs) {
        //     $scope.radius = commonDataProviderService.name;
        //     console.log($scope.radius);
        // }
        controller: controller

    };
}]);