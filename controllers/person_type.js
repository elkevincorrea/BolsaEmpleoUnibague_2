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
    create: function(person_type, callback) {
        models.Person_Type.create(person_type).then(function(res) {
            callback(null, res);
        }, function(err) {
            callback(err, null);
        });
    },
    update: function(person_type, callback) {
        models.Person_Type.update(person_type, {
            where: {
                id: person_type.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(person_type_id, callback) {
        models.Person_Type.destroy({
            where: {
                id: person_type_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = PersonTypeController