'use strict';

var roleRoute = require('./role.js');
var userRoute = require('./user.js')

var routes = [].concat(roleRoute, userRoute);

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