'use strict';

var routes = [];

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