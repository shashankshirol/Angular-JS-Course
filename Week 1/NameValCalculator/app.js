(function () {
    'use strict';

    angular.module('nameCalculator', [])
    .controller('nameController', function ($scope) {
        $scope.name = "";
        $scope.total_val = 0;

        $scope.dispNum = function (params) {
            var nameValue = calcNumeric($scope.name);
            $scope.total_val = nameValue;
        };

        function calcNumeric(nameStr) {
            var score = 0;
            for(var i = 0; i < nameStr.length; i++){
                score += nameStr.charCodeAt(i);
            }

            return score;
        }

    });

})();