(function () {
    'use strict'

    angular.module('DI_APP', [])
    .controller('DI_Controller', DI_control);

    function DI_control($scope, $filter) {
        $scope.name = "Shashank"

        $scope.upper = function () { 
            $scope.name = $filter('uppercase')($scope.name);
        };
    }
 })();