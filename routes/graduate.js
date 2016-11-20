'use strict';

var GraduateController = require('../controllers/graduate.js');

module.exports = [
    {
        method: 'GET',
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
        path: '/bolsa-empleo/graduates/postulates',
        handler: function(request, reply) {
            
        }
    }
];