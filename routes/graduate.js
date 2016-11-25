'use strict';

var GraduateController = require('../controllers/graduate.js');

module.exports = [
    {
        method: 'GET',
        config: {
            auth: false
        },
        path: '/bolsa-empleo/graduates',
        handler: function(request, reply) {
            GraduateController.getAll(function(err, res) {
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
        path: '/bolsa-empleo/graduates',
        handler: function (request, reply) {
            var graduate = request.payload;
            GraduateController.create(graduate, function(err, res) {
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
        path: '/bolsa-empleo/graduates/postulations',
        handler: function(request, reply) {
            if(!request.auth.credentials.Graduate || !request.auth.credentials.Graduate.identification){
                return reply({"status": 401,"message": "Unauthorized"});
            }
            var id_graduate = request.auth.credentials.Graduate.identification;
            GraduateController.getPostulations(id_graduate, function(err, res) {
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
        path: '/bolsa-empleo/graduates/postulations',
        handler: function(request, reply) {
            if(!request.auth.credentials.Graduate || !request.auth.credentials.Graduate.identification){
                return reply({"status": 401,"message": "Unauthorized"});
            }
            var id_graduate = request.auth.credentials.Graduate.identification;
            var id_vacancy = request.payload.id_vacancy;
            GraduateController.postulateToVacancy(id_graduate, id_vacancy, function(err, res) {
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