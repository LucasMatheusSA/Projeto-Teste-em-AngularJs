app.controller('contasCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.cor = "";
    $scope.corLocalB = "";
    $scope.corLocalF = "";
    $scope.corCol = "";

    $scope.local = "";


    $scope.conta = {
        id: 0,
        valor: 0,
        banco: 0,
        fisico: 0,
        desc: "",
        cor: ""
    };

    $scope.contas = [];

    $scope.selecionarF = function() {
        $scope.local = "fisico";
        $scope.corLocalB = ""
        $scope.corLocalF = "bg-primary"

    }

    $scope.selecionarB = function() {
        $scope.local = "banco";
        $scope.corLocalB = "bg-primary"
        $scope.corLocalF = ""
    }

    $scope.positivo = function() {
        var copia;
        $scope.conta.cor = "bg-success";
        $scope.conta.id = parseFloat($scope.conta.id) + 1;
        if ($scope.local === "fisico") {
            $scope.conta.fisico = parseFloat($scope.conta.fisico) + parseFloat($scope.conta.valor);
        } else if ($scope.local === "banco") {
            $scope.conta.banco = parseFloat($scope.conta.banco) + parseFloat($scope.conta.valor);
        }
        copia = angular.copy($scope.conta);
        $scope.contas.push(copia);
    }

    $scope.negativo = function() {
        var copia;
        $scope.conta.cor = "bg-danger";
        $scope.conta.id = parseFloat($scope.conta.id) + 1;
        if ($scope.local === "fisico") {
            $scope.conta.fisico = parseFloat($scope.conta.fisico) - parseFloat($scope.conta.valor);
        } else if ($scope.local === "banco") {
            $scope.conta.banco = parseFloat($scope.conta.banco) - parseFloat($scope.conta.valor);
        }
        copia = angular.copy($scope.conta);
        $scope.contas.push(copia);
    }

    $scope.saque = function() {
        var copia;
        $scope.conta.cor = "";
        $scope.conta.id = parseFloat($scope.conta.id) + 1;
        $scope.conta.fisico = parseFloat($scope.conta.fisico) + parseFloat($scope.conta.valor);
        $scope.conta.banco = parseFloat($scope.conta.banco) - parseFloat($scope.conta.valor);
        $scope.conta.desc = "Saque";
        copia = angular.copy($scope.conta);
        $scope.contas.push(copia);
    }

    $scope.deletar = function(id) {
        $scope.contas.splice($scope.contas.indexOf('id'), 1);
    }

}]);