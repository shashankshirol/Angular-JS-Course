(function(){
    'use strict'
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        $scope.inp_text = "";
        $scope.CheckList = function(){
            console.log($scope.inp_text);
            var list_ = $scope.inp_text.split(",");
            list_ = list_.filter(function (entry){ return entry.trim() != '';}); // DO NOT COUNT AN EMPTY ITEM

            if (list_.length == 0 || $scope.inp_text == ''){
                $scope.out_text = "Please enter data first!";
            }
            else if(list_.length > 3){
                $scope.out_text = "Too much!";
            }
            else{
                $scope.out_text = "Enjoy!";
            }
        }
    }
})();