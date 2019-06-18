app.controller('contasCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.cor = "";
    $scope.corLocalB = "btn btn-secondary";
    $scope.corLocalF = "btn btn-secondary";
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

    $scope.selecionar = function(nome) {
        if (nome === "fisico") {
            $scope.local = "fisico";
            $scope.corLocalB = "btn btn-secondary"
            $scope.corLocalF = "btn btn-primary"
        } else if (nome === "banco") {
            $scope.local = "banco";
            $scope.corLocalB = "btn btn-primary"
            $scope.corLocalF = "btn btn-secondary"
        }
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