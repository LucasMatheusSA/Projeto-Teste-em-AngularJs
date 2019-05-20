app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'inicioCtrl'
        })
        .when('/Pessoas', {
            templateUrl: 'html/pessoas.html',
            controller: 'pessoasCtrl'
        })
        .when('/Cadastro', {
            templateUrl: 'html/cadastro.html',
            controller: 'cadastroCtrl'
        })
        .when('/Pessoa/:id/', {
            templateUrl: 'html/pessoa.html',
            controller: 'pessoaCtrl'
        })
        .when('/PessoasBD', {
            templateUrl: 'html/pessoasbd.html',
            controller: 'pessoasbdCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


});