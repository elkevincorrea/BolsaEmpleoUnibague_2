'use strict';

var models = require('../models');
const graduate_type = 1; //TODO

var GraduateController = {
    getAll: function(callback) {
        models.Person.findAll({
            where: {
                person_type_id: graduate_type
            },
            include: [models.Identification_Type, models.Person_Type, models.Professional_Profile]
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Person.findOne({
            where: {
                identification: id
            },
            include: [models.Identification_Type, models.Person, models.Professional_Profile]
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    create: function(graduate, callback) {
        graduate.person_type_id = graduate_type;
        models.Person.create(graduate, {
            include: [models.Professional_Profile]
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(graduate, callback) {
        models.Person.update(graduate, {
            where: {
                identification: graduate.identification
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(graduate_id, callback) {
        models.Person.destroy({
            where: {
                identification: graduate_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = GraduateController