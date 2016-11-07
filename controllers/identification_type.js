'use strict';

var models = require('../models');

var IdTypeController = {
    getAll: function(callback) {
        models.Identification_Type.findAll().then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Identification_Type.findById(id).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });;
    },
    create: function(id_type, callback) {
        models.Identification_Type.create(id_type).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    },
}

module.exports = IdTypeController