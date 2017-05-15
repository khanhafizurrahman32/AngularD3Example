/**
 * Created by khanhafizurrahman on 5/13/17.
 */

var myApp = angular.module("myapp",[]);

// myApp.service('commonDataProviderService',function () {
//     var radiusOfCircle = 5;
// })

myApp.factory('commonDataProviderService',function () {
    console.log('inside factory');
    return {
        radiusOfCircle : 5,
        lengthOfRect : 10,
        // svgContainer : d3.select('geometricShape').append("svg")
        //                     .attr("width", 400)
        //                     .attr("height",600)
    }
})