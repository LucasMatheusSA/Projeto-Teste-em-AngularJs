app.controller('inicioCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mInicio");
    $scope.dados = {};
    $scope.teste = {};
    $scope.teste1 = "daaaaale";
    $scope.teste2 = "";

    $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function(data) {
        console.log(data);
        $scope.dados = data;
    })


    function toggleBtn(botao) {
        var elemento;
        switch (botao) {
            case 1:
                elemento = $(".btnPesquisarInput input");
                break;
            case 2:
                elemento = $(".btnMaisBotoesGrupo");
                break;
                //case 3: Clique aqui para saber mais sobre o diálogo!
        }

        if (elemento.is(":visible")) {
            elemento.hide(300);
        } else {
            elemento.show(300);
            // elemento.focus(); -- Focar o campo caso seja texto
        }

        // Se quiser que o botão pesquisa feche ao desfocar o input
        // $(".btnPesquisarInput input").blur(function(){ toggleBtn(1); });
    }




    // $http.get('http://10.36.11.17:8080/pessoabd').then(function(data) {
    //     $scope.teste = data;
    //     console.log('sdsd', data);
    // }).catch(function(error) {
    //     console.log('sfggs', error)
    // })


}]);