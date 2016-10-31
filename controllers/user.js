'use strict';

var models = require('../models');

var UserController = {
    getAll: function(callback) {
        models.User.findAll({
                include: [models.Role]
            }).then(function(users) {
            callback(null, users);
        }, function(err) {
            callback(err, null);
        });
    },
    create: function(user, callback) {
        models.User.create(user, {
            include: [models.Role]
        }).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    }
}

module.exports = UserController;