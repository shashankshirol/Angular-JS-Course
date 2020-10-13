(function (){
    'use strict'

    angular.module("Expr_Interp", [])
    .controller("msgController", msgcontroller)
    .filter('bad', FilterFactory)
    .filter('addVal', FilterFactory2);

    msgcontroller.$inject = ['$scope', '$filter', 'badFilter', 'addValFilter']

    function msgcontroller($scope, $filter, badFilter, addValFilter) {
        $scope.name = "Shashank";
        $scope.state_being = "Hungry";
        $scope.btnName = "Feed Me";
        $scope.cost = 10;

        
        $scope.say = function(){
            var msg = $scope.name + " is a good boy";
            var output = $filter("uppercase")(msg);
            return output;
        };

        $scope.sayBad = function () {
            var msg = $scope.name + " is a good boy";
            var output = badFilter(msg);
            return output;
        };

        $scope.addValue = function () {
            var msg = $scope.name + " is a good boy";
            var output = addValFilter(msg, "and a studious boy");
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

    function FilterFactory(){
        return function (input) {
            input = input || "";
            input = input.replace("good", "bad");
            return input;
        };
    }

    function FilterFactory2() {
        return function (input, val) {
            input = input || "";
            input = input + ' ' +val;
            return input;
        };
    }

})();