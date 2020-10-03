(function(){
    'use strict'
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {

        $scope.CheckList = function(){
            
            var list_ = $scope.inp_text.split(",");
            list_ = list_.filter(function (entry){ return entry.trim() != '';}); // DO NOT COUNT AN EMPTY ITEM

            if(list_.length == 0){
                $scope.out_text = "Please enter data first!";
                $scope.out_text.fontcolor('red');
            }
            else if(list_.length > 3){
                $scope.out_text = "Too much!";
                $scope.out_text.fontcolor('green');
            }
            else{
                $scope.out_text = "Enjoy!";
                $scope.out_text.fontcolor('green');
            }
        }
    }
})();