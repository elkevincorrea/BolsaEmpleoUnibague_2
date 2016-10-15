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
    }
]