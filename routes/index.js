'use strict';

var idTypeRoute = require('./identification_type.js');
var personTypeRoute = require('./person_type.js');
var userRoute = require('./user.js');
var companyRoute = require('./company.js');
var graduateRoute = require('./graduate.js');
var vacancyRoute = require('./vacancy.js');

var routes = [].concat(userRoute, idTypeRoute, personTypeRoute, companyRoute, graduateRoute, vacancyRoute);

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