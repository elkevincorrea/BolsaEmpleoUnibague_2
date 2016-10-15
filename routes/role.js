var roleController = require('../controllers/role.js');

module.exports = [
    {
        method: 'GET',
        path: '/roles',
        handler: function(req, reply) {
            roleController.getAll(function(err, roles) {
                if(err){
                    console.log(err);
                    reply(err);
                }
                reply(roles);
            });
        }
    },
    {
        method: 'POST',
        path: '/roles',
        handler: function(request, reply) {
            var role = request.payload;
            roleController.create(role, function(err, res) {
                if(err){
                    console.log(err);
                    reply(err);
                }
                reply(res);
            });
        }
    }
]