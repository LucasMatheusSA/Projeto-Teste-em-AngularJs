var app = angular.module('universidadApp', ['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.menuSuperior = 'html/menu.html';


    $scope.setActive = function(Opcion) {

        $scope.mInicio = "";
        $scope.mPessoas = "";
        $scope.mCadastro = "";
        $scope.mPessoasBD = "";
        $scope.mNotas = "";

        $scope[Opcion] = "active";

    }

    $scope.popUp = function() {
        Swal.fire({
            title: 'so no teste aq',
            width: 600,
            padding: '3em',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              center left
              no-repeat
            `
        })
    }

}]);