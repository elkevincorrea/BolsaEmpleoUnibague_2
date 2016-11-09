'use strict';

const Hapi = require('hapi');
const config = require('./config/config.json');

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

var validateAuth = function(decoded, request, callback) {
    var UserController = require('./controllers/user.js');
    UserController.getUserByEmail(decoded.email, function(err, res) {
        if(err){
            return callback(null, false);
        }else{
            return callback(null, true);
        }
    })
}

server.register([require('inert'), require('hapi-auth-jwt2')], (err) => {
    server.auth.strategy('jwt', 'jwt', {
        key: config.secretkey,
        validateFunc: validateAuth,
        verifyOptions: { algorithms: ['HS256'] }
    });
    server.auth.default('jwt');
    server.route(routes);
});

server.start(function(err) {
    if(err){
        throw err;
    }
    console.log('Sever running at: ' + server.info.uri);
});