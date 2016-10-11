'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        return reply('Configuración inicial');
    }
});

server.start(function(err) {
    if(err){
        throw err;
    }
    console.log('Sever running at: ' + server.info.uri);
});