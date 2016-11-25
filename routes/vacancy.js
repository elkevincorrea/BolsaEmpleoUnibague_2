'use strict';

var VacancyController = require('../controllers/vacancy.js');

module.exports = [
    {
        method: 'GET',
        path: '/bolsa-empleo/vacancies',
        config: {
            auth: false
        },
        handler: function(request, reply) {
            VacancyController.getAll(function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else{
                    reply(res);
                }
            });
        }
    }
];