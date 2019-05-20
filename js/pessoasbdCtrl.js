app.controller('pessoasbdCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mPessoasBD");

    $scope.alunos = {};

    $http.get('php/servicios/alumnos.listado.php').then(function(data) {
        $scope.alunos = data;
    });


}]);