app.controller('inicioCtrl', ['$scope', function($scope) {

    $scope.setActive("mInicio");

    $scope.popUp = function() {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '3em',
            background: '#fff url(/img/ceuEstrela.jpg)',
            backdrop: `
			  rgba(0,0,123,0.4)
			  url("/img/cat.gif")
			  center left
			  no-repeat
			`
        })
    }
}]);