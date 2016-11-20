'use strict';

var VacancyController = require('../controllers/vacancy.js');

module.exports = [
    {
        method: 'GET',
        path: '/bolsa-empleo/vacancies',
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