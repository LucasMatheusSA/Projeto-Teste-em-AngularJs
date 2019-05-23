app.controller('pessoasbdCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mPessoasBD");

    $scope.pessoas = {};

    $http.get('php/servicios/alumnos.getAlumno.php?c=').then(function(data) {
        console.log("funciona");
        $scope.pessoas = data;
    });



}]);
//10.36.11.17:8080/pessoabd
// php/servicios/alumnos.listado.php