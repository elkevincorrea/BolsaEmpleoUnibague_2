'use strict';

var idTypeRoute = require('./identification_type.js');
var personTypeRoute = require('./person_type.js');
var userRoute = require('./user.js');

var routes = [].concat(userRoute, idTypeRoute, personTypeRoute);

module.exports = [{
        method: 'GET',
        path: '/',
        handler: function(req, reply) {
            reply.file('./public/index.html');
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public',
                listing: false
            }
        }
    }].concat(routes);