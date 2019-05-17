app.controller('pessoasCtrl', ['$scope', function($scope) {

    $scope.setActive("mPessoas");

    $scope.inicio = 5;
    $scope.filtrando = "";

    $scope.personas = ["Carlos", "Pedro", "Maria", "Susana", "Melissa", "Fernando", "Hernando", "Juan", "Camila", "Ubaldina", "Jocelyn", "Arlette", "Dilcia", "Andrea", "Antonio", "Jose", "Alberto"];


    $scope.siguientes = function() {

        if ($scope.inicio < $scope.personas.length) {
            $scope.inicio += 5;
        };

    }

    $scope.anteriores = function() {
        if ($scope.inicio > 5) {
            $scope.inicio -= 5;
        };
    }


    $scope.personas = [{
            "id": 0,
            "sexo": "Homem",
            "nome": "Kari Carr",
            "avatar": "kari.jpg",
            "telefono": "(826) 453-3497",
            "celular": "(801) 9175-8136"
        },
        {
            "id": 1,
            "sexo": "Mulher",
            "nome": "Tameka Gamble",
            "avatar": "tameka.jpg",
            "telefono": "(824) 438-2499",
            "celular": "(801) 8595-8337"
        },
        {
            "id": 2,
            "sexo": "Mulher",
            "nome": "Charity Austin",
            "avatar": "charity.jpg",
            "telefono": "(817) 512-2258",
            "celular": "(801) 9375-3830"
        },
        {
            "id": 3,
            "sexo": "Mulher",
            "nome": "Slater Hunt",
            "avatar": "slater.jpg",
            "telefono": "(842) 413-3023",
            "celular": "(801) 9555-1729"
        },
        {
            "id": 4,
            "sexo": "Mulher",
            "nome": "Chen Hanson",
            "avatar": "chen.jpg",
            "telefono": "(966) 520-2696",
            "celular": "(801) 9324-4423"
        },
        {
            "id": 5,
            "sexo": "Homem",
            "nome": "Obrien Davis",
            "avatar": "obrien.jpg",
            "telefono": "(996) 595-3896",
            "celular": "(801) 8195-2732"
        },
        {
            "id": 6,
            "sexo": "Homem",
            "nome": "Le Haley",
            "avatar": "le.jpg",
            "telefono": "(967) 527-3286",
            "celular": "(801) 8074-5225"
        },
        {
            "id": 7,
            "sexo": "Homem",
            "nome": "Lester Carney",
            "avatar": "lester.jpg",
            "telefono": "(994) 465-3542",
            "celular": "(801) 9044-7522"
        },
        {
            "id": 8,
            "sexo": "Homem",
            "nome": "Rosario Perry",
            "avatar": "rosario.jpg",
            "telefono": "(848) 499-2977",
            "celular": "(801) 8495-0625"
        },
        {
            "id": 9,
            "sexo": "Mulher",
            "nome": "Marilyn Huber",
            "avatar": "marilyn.jpg",
            "telefono": "(982) 580-3235",
            "celular": "(801) 8184-2624"
        }
    ];

}]);