app.controller('inicioCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mInicio");
    $scope.dados = {};
    $scope.teste = {};


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
        console.log(data);
        $scope.dados = data;
    })

    // $http.get('http://10.36.11.17:8080/pessoabd').then(function(data) {
    //     $scope.teste = data;
    //     console.log('sdsd', data);
    // }).catch(function(error) {
    //     console.log('sfggs', error)
    // })


}]);