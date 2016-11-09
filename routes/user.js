var userController = require('../controllers/user.js');
const Token = require('../util/token.js');

module.exports = [
    {
        method: 'POST',
        path: '/bolsa-empleo/users',
        handler: function(request, reply) {
            var user = request.payload;
            userController.create(user, function(err, res) {
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
                    console.log('POST /bolsa-empleo/users/company err:\n' + err);
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
    }
]