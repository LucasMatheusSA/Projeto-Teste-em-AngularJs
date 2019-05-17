app.controller('cadastroCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mCadastro");

    $scope.aluno = {};

    $http.get('php/servicios/alumnos.listado.json')
        .then(function(data) {
            $scope.aluno = data;
        })

}]);