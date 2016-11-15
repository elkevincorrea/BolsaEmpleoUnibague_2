'use strict';

var models = require('../models');

var InstituteController = {
    getAll: function(callback) {
        models.Institute.findAll().then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Institute.findById(id).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    create: function(institute, callback) {
        models.Institute.create(institute).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(institute, callback) {
        models.Institute.update(institute, {
            where: {
                id: institute.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(institute_id, callback) {
        models.Institute.destroy({
            where: {
                id: institute_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = InstituteController