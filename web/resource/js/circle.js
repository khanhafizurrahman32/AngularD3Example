/**
 * Created by khanhafizurrahman on 5/15/17.
 */
// myApp.directive('circledraw',function (commonDataProviderService) {
//     console.log('insideCircle');
//     var link = function ($scope,$element, attrs){
//         $scope.radius = 5;
//         var input = '<input type ="text" ng-model="radius" placeholder="Enter the radiusValue" class="ng-valid ng-dirty ng-valid-parse ng-touched"/>';
//         $element.append(input);
//         // $scope.$eval('radius');
//         // $element.append($scope.radius);
//         $scope.$watch('radius',function(){
//             commonDataProviderService.prepForCircleRadius();
//         })
//
//     }
//     return {
//         restrict: 'E',
//         link: link,
//         //template: '{{radius}}'
//     };
// });

myApp.directive('circledraw',function(){
    return{
        link : function ($scope,$elements,attrs) {
            console.log('insideCircle');
        }
    }
})