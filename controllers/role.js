'use strict';

var models = require('../models');

var roleController = {
    getAll: function(callback) {
        models.Role.findAll().then(function(roles) {
            callback(null, roles);
        }, function(err) {
            callback(err, null);
        });
    },
    create: function(role, callback) {
        models.Role.create(role).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    },
    getById: function(id, callback) {
        models.Role.findById(id).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });

    }
}

module.exports = roleController;