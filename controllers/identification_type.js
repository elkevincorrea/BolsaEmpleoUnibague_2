'use strict';

var models = require('../models');

var IdTypeController = {
    getAll: function(callback) {
        models.Identification_Type.findAll().then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Identification_Type.findById(id).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });;
    },
    create: function(id_type, callback) {
        models.Identification_Type.create(id_type).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(id_type, callback) {
        models.Identification_Type.update(id_type, {
            where: {
                id: id_type.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(id_type_id, callback) {
        models.Identification_Type.destroy({
            where: {
                id: id_type_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = IdTypeController