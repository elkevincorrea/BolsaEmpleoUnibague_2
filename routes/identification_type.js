'use strict';

var idTypeController = require('../controllers/identification_type.js');

module.exports = [
    {
        method: 'POST',
        path: '/bolsa-empleo/identification-types',
        handler: function(request, reply) {
            var id_type = request.payload;
            idTypeController.create(id_type, function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else
                    reply(res);
            });
        }
    }, 
    {
        method: 'GET',
        path: '/bolsa-empleo/identification-types',
        config: {
            auth: false
        },
        handler: function(request, reply) {
            idTypeController.getAll(function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else{
                    reply(res);
                }
            });
        }
    }
]