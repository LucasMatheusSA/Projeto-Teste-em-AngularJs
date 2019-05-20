app.controller('inicioCtrl', ['$scope', function($scope) {

    $scope.setActive("mInicio");

    $scope.popUp = function() {
        Swal.fire({
            title: 'so no teste aq',
            width: 600,
            padding: '3em',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              center left
              no-repeat
            `
          })
    }
}]);