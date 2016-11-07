'use strict';

var personTypeController = require('../controllers/person_type.js');

module.exports = [
    {
        method: 'POST',
        path: '/bolsa-empleo/person-types',
        handler: function(request, reply) {
            var person_type = request.payload;
            personTypeController.create(person_type, function(err, res) {
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
        path: '/bolsa-empleo/person-types',
        handler: function(request, reply) {
            personTypeController.getAll(function(err, res) {
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