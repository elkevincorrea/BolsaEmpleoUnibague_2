'use strict';

var graduateController = require('../controllers/graduate.js');

module.exports = [
    {
        method: 'POST',
        path: '/api/bolsa-empleo/graduates',
        handler: function(request, reply) {
            var graduate = request.payload;
            graduateController.create(graduate, function(err, res) {
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
