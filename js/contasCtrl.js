app.controller('contasCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.conta = {
        cor:'',
        banco:0,
        fisico:0,
        valor:0,
        desc:"",
    };

    $scope.contas = [];

    $scope.positivo = function(conta) {
        conta.banco = parseFloat(conta.banco) + parseFloat(valor);
        contas.push(conta);
        conta.cor="bg-success"
    }

    $scope.negativo = function(conta) {
        conta.banco = parseFloat(conta.banco) - parseFloat(valor);
        contas.push(conta);
        conta.cor="bg-danger"
    }

    $scope.delete = function(contas){
    }

}]);