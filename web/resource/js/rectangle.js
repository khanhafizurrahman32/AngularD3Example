/**
 * Created by khanhafizurrahman on 5/15/17.
 */
myApp.directive('rect',function () {
    console.log('inside Rectangle');
    function link($scope, $element, attr){
        console.log($element[0]);
        d3.select($element[0])
            .attr("x", 70)
            .attr("y", 70)
            .attr("width", 50)
            .attr("height", 100);
    }
    return {
        link : link,
        restrict: 'E',
    };
});