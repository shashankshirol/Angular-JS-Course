(function (){
    'use strict';

    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuy", ToBuyController)
    .controller("Bought", BoughtController)
    .service("ShoppingListService", ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService){
        var buyingList = this;
        buyingList.items = ShoppingListService.getToBuyItems();

        buyingList.removeItem = function (itemIndex){
            ShoppingListService.removeItem(itemIndex);
        };
    }

    BoughtController.$inject = ['ShoppingListService'];
    function BoughtController(ShoppingListService){
        var boughtList = this;
        boughtList.items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService(){
        var service = this;

        var ToBuyitems = [{name: "apples" , quantity: 12}, {name: "oranges" , quantity: 13}, {name: "mangoes" , quantity: 11}, {name: "noodles" , quantity: 5}, {name: "BBQ sauce" , quantity: 3}];
        var boughtItems = [];
        
          service.removeItem = function (itemIndex) {
            boughtItems.push(ToBuyitems[itemIndex])
            ToBuyitems.splice(itemIndex, 1);
          };
        
          service.getToBuyItems = function () {
            return ToBuyitems;
          };

          service.getBoughtItems = function () {
            return boughtItems;
          };
    }

})();