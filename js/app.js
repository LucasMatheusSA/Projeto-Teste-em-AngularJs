var app = angular.module('projetoApp', ['ngRoute']);

app.controller('mainCtrl', ['$http', '$scope', function($http, $scope) {

    $scope.menuPrincipal = 'html/menu.html';

    $scope.setAtivar = function(select) {
        $scope.mInicio = "";
        $scope.mListagem = "";
        $scope.mPessoa = "";

        $scope[select] = "active";

    }

}]);