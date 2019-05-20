app.controller('cadastroCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mCadastro");
    $scope.aluno = {};
    $scope.atualizado = false;

    $scope.atualizar = function() {
        $http.post('php/servicios/alumnos.crear.php', $scope.aluno).then(function(data) {
            console.log(data);
            $scope.atualizado = true;
        });
    }

}]);