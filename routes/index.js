'use strict';

var roleRoute = require('./role.js');

var routes = [].concat(roleRoute);

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