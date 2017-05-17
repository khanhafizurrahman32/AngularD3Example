/**
 * Created by khanhafizurrahman on 5/15/17.
 */

myApp.directive('geometricShape',function ($compile,commonDataProviderService){

    var link = function ($scope, $element, attrs){
        var svgContainer = d3.select($element[0]).append("svg")
            .attr("width", 400)
            .attr("height",600)
            .style("border", "1px solid black");

        $scope.radius = commonDataProviderService.radiusOfCircle;

        var circle = svgContainer.append('circle')
            .attr("cx",30)
            .attr("cy",40)
            .attr("r",$scope.radius)
            //.style('fill','yellow');

        $scope.$on ('handleCircleRadiusBroadcast',function () {
            $scope.radius = commonDataProviderService.radiusOfCircle;
            circle.attr("r",$scope.radius)
        })

        $(($element[0]).children[0].children[0]).on('click',function () {
            console.log('pre clicked');
            $scope.goCats = !$scope.goCats;
            console.log($scope.goCats);
            // $apply helps us to update the value and starts it from the $rootscope
            $scope.$apply();
        })
    }
    return {
        link : link
    }

})