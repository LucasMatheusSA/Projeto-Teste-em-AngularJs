app.controller('pessoasbdCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mPessoasBD");

    $scope.alunos = {};

    $http.get('http://10.36.11.17:8080/pessoabd').then(function(data) {
        console.log("funciona");
        $scope.alunos = data;
    });

}]);
//10.36.11.17:8080/pessoabd
// php/servicios/alumnos.listado.php