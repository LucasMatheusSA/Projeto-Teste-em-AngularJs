app.controller('inicioCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mInicio");
    $scope.dados = {};

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

    $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function(data) {
        $scope.dados = data;
    })


}]);