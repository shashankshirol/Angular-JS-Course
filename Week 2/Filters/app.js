(function (){
    'use strict'

    angular.module("Expr_Interp", [])
    .controller("msgController", msgcontroller);

    msgcontroller.$inject = ['$scope', '$filter']

    function msgcontroller($scope, $filter) {
        $scope.name = "Shashank";
        $scope.state_being = "Hungry";
        $scope.btnName = "Feed Me";
        $scope.cost = 10;

        
        $scope.say = function(){
            var msg = $scope.name + " is a good boy";
            var output = $filter("uppercase")(msg);
            return output;
        };

        $scope.feedMe = function(){
            if ($scope.state_being == "Hungry"){
                $scope.state_being = "Fed";
                $scope.btnName = "Un-feed Me";
            }else{
                $scope.state_being = "Hungry";
                $scope.btnName = "Feed Me";
            }
        };

    }

})();