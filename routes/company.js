'use strict';

var CompanyController = require('../controllers/company.js');
var VacancyController = require('../controllers/vacancy.js')

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
        path: '/bolsa-empleo/companies/vacancies',
        handler: function(request, reply){
            if(!request.auth.credentials.Company || !request.auth.credentials.Company.identification){
                return reply({status: 401, message:'Unathorized'});
            }
            var company_id = request.auth.credentials.Company.identification;
            CompanyController.getVacancies(company_id, function(err, res) {
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
        method: 'POST',
        path:'/bolsa-empleo/companies/vacancies',
        handler: function(request, reply) {
            if(!request.auth.credentials.Company || !request.auth.credentials.Company.identification){
                return reply({status: 401, message:'Unathorized'});
            }
            var vacancy = request.payload;
            vacancy.company_identification = request.auth.credentials.Company.identification;
            VacancyController.create(vacancy, function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else{
                    reply(res);
                }
            })
        }
    }
];