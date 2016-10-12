'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register(require('inert'), (err) => {
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public',
                listing: false
            }
        }
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.file('./public/index.html');
        }
    }]);
});




server.start(function(err) {
    if(err){
        throw err;
    }
    console.log('Sever running at: ' + server.info.uri);
});