var tryOne = angular.module('tryOne', ['ngRoute']);
tryOne.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'view/mainPage.html'
        })
        .when('/login', {
            templateUrl : 'view/login.html'
        })
        .when("/registretion", {
            templateUrl : "view/registration.html"
        })
        .when("/home", {
            templateUrl : "view/homePage.html"
        });
});
tryOne.controller('stepOneCtrl', function($location, $scope)
    {
        $scope.user_r = {username:'', password:'', mail:''};
        $scope.user_l = {username:'', password:''};
        $scope.openLoginPage = function(){
           $location.path('login');
       };
        $scope.openRegPage = function(){
            $location.path('registretion');
        };
        $scope.registration = function(){
        if ($scope.user_r.username == ''| $scope.user_r.password == ''| $scope.user_r.mail == '')
        {
            $scope.message= "Error, fill all input";
        }else
        {
            $scope.message= "Success, wait";
        }
    };
        $scope.login = function(){
            if ($scope.user_l.password == '1111')
            {
                if($scope.user_l.username !== '') {
                    $scope.usernickname = $scope.user_l.username;
                    $location.path('home');
                }else
                    $scope.message_l= "Error, use You nickname";

            }else
            {
                $scope.message_l= "Error, You don't use password or Your password have mistake";
            }
        };
        $scope.logout = function(){
            $scope.usernickname = '';
            $location.path('');
        };
        var step = this;
        step.stats = [
        {
            'username': 'Nickola',
            'domain': 'www.github.com',
            'img': 'icon/g.png',
            'comment': 'It repository',
            'check': false
        },
        {
            'username': 'User1',
            'domain': 'www.youtube.com',
            'img': 'icon/y.png',
            'comment': 'Keep video',
            'check': false
        },
        {
            'username': 'user2',
            'domain': 'www.habrhabr.ru',
            'img': 'icon/h.png',
            'comment': 'IT lab',
            'check': false
        },
        {
            'username': 'User3',
            'domain': 'www.facebook.com',
            'img': 'icon/f.png',
            'comment': 'social network',
            'check': false
        },
        {
            'username': 'user4',
            'domain': 'www.geekbrain.com',
            'img': 'icon/b.png',
            'comment': 'Good web-site',
            'check': false
        }
    ];

            step.statDelete = function() {
            var oneStat = step.stats;
            step.stats = [];
            angular.forEach(oneStat, function(stat) {
                if (!stat.check) step.stats.push(stat);
            });
        };
            step.addStat = function() {
            step.stats.push({
                'username': step.username,
                'domain': step.web,
                'img': 'icon/b.png',
                'comment': step.comment,
                'check': false
            });
            step.username = "";
            step.web = "";
            step.comment = "";
        };
    });