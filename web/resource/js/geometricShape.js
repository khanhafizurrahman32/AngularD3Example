/**
 * Created by khanhafizurrahman on 5/15/17.
 */

myApp.directive('geometricShape',function ($compile,commonDataProviderService){

    var link = function ($scope, $element, attrs){
        var svgContainer = d3.select($element[0]).append("svg")
            .attr("preserveAspectRatio","xMinYMin meet").attr("viewBox", "0 0 580 667").classed("svg-content-responsive",true)
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
            $scope.circleInput = !$scope.circleInput;
            // $apply helps us to update the value and starts it from the $rootscope
            $scope.$apply();
        });

        var poly = commonDataProviderService.upperMoldDieData;

        svgContainer.selectAll("polygon")
            .data([poly])
            .enter().append("polygon")
            .attr("points",function(d) {
                return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
            .attr("stroke","black")
            .attr("stroke-width",2);

        $(($element[0]).children[0].children[1]).on('click',function () {
            console.log('pre clicked');
            $scope.upperMoldDieInputShow = !$scope.upperMoldDieInputShow;
            $scope.$apply();
        });

        $scope.$on ('handleUpperMoldDieDataBroadcast',function (){
            console.log('handleUpperMoldDieDataBroadcast');
            poly = commonDataProviderService.upperMoldDieData;
            svgContainer.selectAll("polygon").remove();
            svgContainer.selectAll("polygon")
                .data([poly])
                .enter().append("polygon")
                .attr("points",function(d) {
                    return d.map(function(d) { return [scaleX(d.x),scaleY(d.y)].join(","); }).join(" ");})
                .attr("stroke","black")
                .attr("stroke-width",2);
// need to rewrite because when removed once it cant attach with that
            $(($element[0]).children[0].children[1]).on('click',function () {
                console.log('pre clicked');
                $scope.upperMoldDieInputShow = !$scope.upperMoldDieInputShow;
                $scope.$apply();
            });
        })
    }
    return {
        link : link
    }

})