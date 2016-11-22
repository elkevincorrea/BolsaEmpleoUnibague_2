var userController = require('../controllers/user.js');
var GraduateController = require('../controllers/graduate.js');
const Token = require('../util/token.js');

module.exports = [
    {
        method: 'POST',
        path: '/bolsa-empleo/users/graduates',
        config: {
            auth: false
        },
        handler: function(request, reply) {
            var user = request.payload;
            userController.createGraduate(user, function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else
                    reply(res);
            });
        }
    },
    {
        method: 'POST',
        path: '/bolsa-empleo/users/companies',
        config: {
            auth: false
        },
        handler: function(request, reply) {
            var user = request.payload;
            userController.createCompany(user, function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else
                    reply(res);
            });
        }
    }, 
    {
        method: 'GET',
        path: '/bolsa-empleo/users',
        config: {
            auth: 'jwt'
        },
        handler: function(request, reply) {
            userController.getAll(function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }else{
                    reply(res);
                }
            });
        }
    },
    {
        method: 'POST',
        path: '/bolsa-empleo/auth/users/company',
        config: {
            auth: false
        },
        handler: function(request, reply) {
            var user = request.payload;
            userController.getCompanyById(user, function(err, res) {
                if(err){
                    console.log('POST /bolsa-empleo/auth/users/company err:\n' + err);
                    reply(err);
                }else{
                    if(res){
                        var token = Token.createToken({
                            email: res.email,
                            Company: {
                                identification: res.Company.identification,
                                name: res.Company.name
                            }
                        });
                        reply(token);
                    }else{
                        reply(res);
                    }
                    
                }
            })
        }
    },
    {
        method: 'POST',
        path: '/bolsa-empleo/auth/users/graduate',
        config: {
            auth: false
        },
        handler: function(request, reply) {
            var user = request.payload;
            userController.getGraduateById(user, function(err, res) {
                if(err){
                    console.log('POST /bolsa-empleo/users/company err:\n' + err);
                    reply(err);
                }else{
                    if(res){
                        var token = Token.createToken({
                            email: res.email,
                            Graduate: {
                                identification: res.Person.identification,
                                first_name: res.Person.first_name,
                                last_name: res.Person.last_name
                            }
                        });
                        reply({token: token});
                    }else{
                        reply(res);
                    }
                    
                }
            })
        }
    }
]