var app = angular.module('universidadApp', ['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.menuSuperior = 'html/menu.html';


    $scope.setActive = function(Opcion) {

        $scope.mInicio = "";
        $scope.mPessoa = "";
        $scope.mCadastro = "";
        $scope.mPessoasBD = "";

        $scope[Opcion] = "active";

    }

}]);