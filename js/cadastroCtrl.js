app.controller('cadastroCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mCadastro");
    $scope.aluno = {};
    $scope.atualizado = false;

    $scope.cadastrar = function() {
        $http.post('php/servicios/alumnos.crear.php', $scope.aluno).then(function(data) {
            console.log(data);
            Swal.fire({
                type: 'success',
                title: 'Cadastro realizado com sucesso',
                showConfirmButton: false,
                timer: 1750
            })
        });
    }

}]);