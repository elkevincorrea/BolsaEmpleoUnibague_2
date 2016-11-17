'use strict';

var CompanyController = require('../controllers/company.js');

module.exports = [
    {
        method: 'GET',
        path: '/bolsa-empleo/companies',
        handler: function(request, reply) {
            CompanyController.getAll(function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else{
                    reply(res);
                }
            });
        }
    },
    {
        method: 'GET',
        path: '/bolsa-empleo/companies/{id}',
        handler: function(request, reply){
            var company_id = request.params.id;
            CompanyController.getById(company_id, function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else{
                    reply(res);
                }
            });
        }
    },
    {
        method: 'GET',
        path: '/bolsa-empleo/companies/{id}/vacancies',
        handler: function(request, reply){
            var company_id = request.params.id;
            CompanyController.getVacancies(company_id, function(err, res) {
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