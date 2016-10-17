var userController = require('../controllers/user.js');

module.exports = [
    {
        method: 'POST',
        path: '/users',
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
    }
]