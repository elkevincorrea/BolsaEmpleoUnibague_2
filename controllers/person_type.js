'use strict';

var models = require('../models');

var PersonTypeController = {
    getAll: function(callback) {
        models.Person_Type.findAll().then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Person_Type.findById(id).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });;
    },
    create: function(id_type, callback) {
        models.Person_Type.create(id_type).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    },
}

module.exports = PersonTypeController