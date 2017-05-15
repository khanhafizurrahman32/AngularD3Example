/**
 * Created by khanhafizurrahman on 5/15/17.
 */
myApp.directive('circle',function () {
    console.log('insideCircle');
    function link($scope, $element, attr){
        var circleContainer = d3.select($element[0]).append('svg')
                                    .attr("width", 100)
                                    .attr("height",100)
                                    .style("border", "1px solid black")
    }
    return {
        link : link,
        restrict: 'E',
    };
});