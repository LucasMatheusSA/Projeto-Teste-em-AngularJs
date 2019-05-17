var app = angular.module('universidadApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.menuSuperior = 'html/menu.html';


    $scope.setActive = function(Opcion) {

        $scope.mInicio = "";
        $scope.mPessoa = "";
        $scope.mCadastro = "";

        $scope[Opcion] = "active";

    }

}]);