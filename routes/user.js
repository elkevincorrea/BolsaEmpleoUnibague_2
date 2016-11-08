var userController = require('../controllers/user.js');

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
        handler: function(request, reply) {
            var user = request.payload;
            userController.getCompanyById(user, function(err, res) {
                if(err){
                    console.log('POST /bolsa-empleo/users/company err:\n' + err);
                    reply(err);
                }else{
                    reply(res);
                }
            })
        }
    }
]