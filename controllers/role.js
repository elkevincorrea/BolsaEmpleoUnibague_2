'use strict';

var models = require('../models');

var roleController = {
    getAll: function(callback) {
        models.Role.findAll().then(function(roles) {
            callback(null, roles);
        }, function(err) {
            callback(err, null);
        });
    }
}

module.exports = roleController;