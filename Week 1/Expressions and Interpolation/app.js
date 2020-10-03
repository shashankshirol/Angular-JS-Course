(function (){
    'use strict'

    angular.module("Expr_Interp", [])
    .controller("msgController", msgcontroller);

    msgcontroller.$inject = ['$scope']
    function msgcontroller($scope) {
        $scope.name = "Shashank";
        $scope.state_being = "Hungry";
        $scope.btnName = "Feed Me";
        $scope.say = function(){
            return $scope.name + " is a good boy";
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