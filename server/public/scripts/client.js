let FoodApp = angular.module('FoodApp', []);

FoodApp.controller('FoodController', function(){
    let vm = this;
    vm.foods = [];

    vm.addFood = function() {
        vm.foods.push(vm.foodIn);
        console.log(vm.foods);
    }
})