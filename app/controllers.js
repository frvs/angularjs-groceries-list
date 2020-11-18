angular.module('app', [])
    .controller('GroceriesListController', ['$scope', GroceriesListController]);
    
function GroceriesListController($scope) {
    $scope.item = {};

    $scope.items = [
        {name: 'Pão', amount: 10, bought: false},
        {name: 'Leite', amount: 1, bought: false}
    ]

    $scope.addItem = function() {
        $scope.items.push({name: $scope.item.name, amount: $scope.item.amount, bought: false});
        $scope.item.name = '';
        $scope.item.amount = '';

        toastr.success("Item adicionado com sucesso!");
    }

    $scope.editItem = function(index) {
        $scope.item = $scope.items[index];
        $scope.edit = true;
    }

    $scope.applyChanges = function() {
        $scope.item = {};
        $scope.edit = false;

        toastr.success("Item editado com sucesso!");
    }

    $scope.deleteItem = function(index) {
        $scope.items.splice(index, 1);

        toastr.success("Item removido com sucesso!")
    }
}