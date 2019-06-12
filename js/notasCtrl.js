app.controller('notasCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.mensagem = "";
    $scope.titulo = "";
    $scope.result = false;
    $scope.cor = "bg-primary";

    $scope.nota1 = "";
    $scope.nota2 = "";




    function calculoMedia() {
        var media;
        var ppassar;
        if ($scope.nota2 === "") {
            if ((parseFloat($scope.nota1) * 2) < 5) {
                ppassar = (15 - (parseFloat($scope.nota1) * 2)) / 3;
                $scope.cor = "bg-danger";
                $scope.mensagem = "Nota para ir pra final (2GQ) - " + ppassar.toFixed(2);
            } else {
                ppassar = (35 - (parseFloat($scope.nota1) * 2)) / 3;
                $scope.cor = "bg-primary";
                $scope.mensagem = "Nota para passar direto (2GQ) - " + ppassar.toFixed(2);
            }
        } else {
            media = ((parseFloat($scope.nota1) * 2) + (parseFloat($scope.nota2) * 3)) / 5;
            if (parseFloat(media) < 3) {
                $scope.cor = "bg-dark";
                $scope.mensagem = "Você Reprovou :("
            } else
            if (parseFloat(media) < 7) {
                ppassar = 10 - parseFloat(media);
                $scope.cor = "bg-danger";
                $scope.mensagem = "Nota para passar (Final) - " + ppassar.toFixed(2);
            } else {
                $scope.cor = "bg-success";
                $scope.mensagem = "Parabéns você passou com nota (Média) - " + media.toFixed(2);
            }
        }
    }

    $scope.calcular = function() {
        $scope.result = true;
        if ($scope.nota2 === "" && $scope.nota1 === "") {
            $scope.titulo = "Não foi digitado nenhuma nota";
            $scope.mensagem = "-";
        } else
        if ($scope.nota2 !== "" && $scope.nota1 === "") {
            $scope.titulo = "Digite a primeira nota";
            $scope.mensagem = "-";
        } else
        if ($scope.nota2 === "") {
            $scope.titulo = "Média";
            calculoMedia();
        } else {
            $scope.titulo = "Média";
            calculoMedia();
        }
    }

}]);