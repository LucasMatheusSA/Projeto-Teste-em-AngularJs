angular.module('projetoApp').config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'inicioCtrl'
        })
        .when('/listagem', {
            templateUrl: 'html/lista.html',
            controller: 'listaCtrl'
        })
        .when('/pessoa', {
            templateUrl: 'html/pessoa.html',
            controller: 'pessoaCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


});