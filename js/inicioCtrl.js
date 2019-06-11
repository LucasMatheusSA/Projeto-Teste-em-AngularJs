app.controller('inicioCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.setActive("mInicio");
    $scope.dados = {};
    $scope.teste = {};
    $scope.teste1 = "daaaaale";
    $scope.teste2 = "";

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

    $scope.edica = function() {
        Swal.fire({
            input: 'text',
            title: 'Digite seu texto',
            html: '<h4>Nome:</h4>' +
                '<input id="$scope.teste1" class="swal2-input" ng-model="$scope.teste1" placeholder="Digite seu nome">' +
                '<h4>Sobrenome:</h4>' +
                '<input id="$scope.teste2" class="swal2-input" ng-model="$scope.teste2" placeholder="Digite seu sobrenome">',

            focusConfirm: true,
        })
    }

    $scope.edicao = async function() {
        const { value: formValues } = await Swal.fire({
            title: 'Cadastro',
            html: '<h4>Nome:</h4>' +
                '<input id="swal-input1" class="swal2-input" ng-model="$scope.teste1" placeholder="Digite seu nome">' +
                '<h4>Sobrenome:</h4>' +
                '<input id="swal-input2" class="swal2-input" ng-model="$scope.teste2" placeholder="Digite seu sobrenome">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }
        })

        if (formValues) {
            Swal.fire(JSON.stringify(formValues))
        }
    }



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