/**
 * Created by khanhafizurrahman on 5/15/17.
 */

myApp.directive('geometricShape',function (){
    var link = function ($scope, $element, attrs){
        var svgContainer = d3.select('geometric-shape').append("svg")
                             .attr("width", 400)
                             .attr("height",600)
                             .style("border", "1px solid black");
    }
  return {
      restrict : 'E',
      templateUrl: 'resource/html/circle.html',
      link: link
      // link: function () {
      //     console.log('insideLink');
      // }
  }
})