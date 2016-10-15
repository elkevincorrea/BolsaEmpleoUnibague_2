'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

var models = require('./models/');

models.sequelize
    .authenticate()
    .then(function() {
        console.log('Connecion Successful');
    })
    .catch(function(err) {
        console.log('Error creating connection:', err);
    });

var routes = require('./routes/index.js');

server.register(require('inert'), (err) => {
    server.route(routes);
});

server.start(function(err) {
    if(err){
        throw err;
    }
    console.log('Sever running at: ' + server.info.uri);
});