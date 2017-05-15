/**
 * Created by khanhafizurrahman on 5/15/17.
 */
myApp.directive('circle',function () {
    console.log('insideCircle');
    function link($scope, $element, attr){
        console.log($element[0]);
        d3.select($element[0])
                .attr("cx",30)
                .attr("cy",40)
                .attr("r",20);
    }
    return {
        link : link,
        restrict: 'E',
    };
});