app.controller('pessoaCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {


    var id = $routeParams.id;
    $scope.pessoa = {};

    $http.get('php/servicios/alumnos.getAlumno.php?c=' + id).then(function(data) {
        $scope.pessoa = data;
    });

    $scope.atualizar = function() {
        $http.post('php/servicios/alumnos.guardar.php', $scope.pessoa).then(function() {
            Swal.fire({
                type: 'success',
                title: 'Atualização realizada com sucesso',
                showConfirmButton: false,
                timer: 1750
            })
        });
    }
}]);


// app.controller('pessoaCtrl' ['$scope', function($scope) {
//     $scope.setAtivar("mPessoa");

//     $scope.profesor = profesorData;
//     $scope.editando = {};

//     $scope.tipo = false;

//     $scope.EditarProfesor = function() {
//         angular.copy($scope.profesor, $scope.editando);
//         $scope.tipo = true;

//     }

//     $scope.GuardarCambios = function() {
//         angular.copy($scope.editando, $scope.profesor);
//         $scope.tipo = false;
//     }

//     $scope.CancelarCambios = function() {

//         $scope.editando = {};
//         $scope.tipo = false;

//     }

// }]);

// var profesorData = {
//     nombre: "Juan Carlos Pineda",
//     bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
//     edad: 47,
//     foto: "img/img.jpg"