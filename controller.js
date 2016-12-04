/**
 * Created by Николай on 02.12.2016.
 */
var tryOne = angular.module('tryOne',[]);

tryOne.controller('stepOneCtrl', function()
    {
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