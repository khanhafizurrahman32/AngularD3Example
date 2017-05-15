/**
 * Created by khanhafizurrahman on 5/15/17.
 */

myApp.directive('geometricShape',function (){
    // var link = function ($scope, $element, attrs){
    //     var svgContainer = d3.select('geometric-shape').append("svg")
    //                          .attr("width", 400)
    //                          .attr("height",600)
    //                          .style("border", "1px solid black");
    // }
    var compile = function(tElement, tAttributes){
        console.log(tElement);
        var svgContainer = d3.select(tElement[0]).append("svg")
                                 .attr("width", 400)
                                 .attr("height",600)
                                 .style("border", "1px solid black");
        svgContainer.append('circle');
        svgContainer.append('rect');

    }
  return {
      restrict : 'E',
      //templateUrl: 'resource/html/circle.html',
      compile: compile,
      // link: function ($scope, $element, attrs) {
      //     console.log('insideLink');
      //     var el = $element[0];
      //     // var div = document.createElement('circle');
      //     // $(el).appendChild(div);
      //     // console.log($(el));
      // }

  }
})