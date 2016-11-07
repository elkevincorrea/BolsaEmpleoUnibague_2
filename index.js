'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});


/**
  * Start test crypting password
  **/
console.log('Testing crypting password');
const passwordCrypt = require('./util/password-crypt.js');

var passText = 'asfasdf';
var hashRes = null;

passwordCrypt.cryptPassword(passText, function(err, hash) {
    if(err){
        console.log('Error crypting: ', err);
    }else{
        console.log('Line25. password crypted= ', hash);
        hashRes = hash;
    }
});
setTimeout(function() {
    console.log('Line30. password crypted= ', hashRes);
    passwordCrypt.comparePassword(passText, hashRes, function(err, res) {
        if(err){
            console.log('Error comparePassword: ', err);
        }else{
            console.log('Compare= ', res);
        }
    });
}, 2000);

//finish test



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