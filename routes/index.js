'use strict';

var idTypeRoute = require('./identification_type.js');
var personTypeRoute = require('./person_type.js');
var userRoute = require('./user.js');
var companyRoute = require('./company.js');

var routes = [].concat(userRoute, idTypeRoute, personTypeRoute, companyRoute);

module.exports = [{
        method: 'GET',
        path: '/',
        config: {
            auth: false
        },
        handler: function(req, reply) {
            reply.file('./public/index.html');
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        config: {
            auth: false
        },
        handler: {
            directory: {
                path: './public',
                listing: false
            }
        }
    }].concat(routes);