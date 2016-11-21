'use strict';

var models = require('../models');
const graduate_type = 1; //TODO
const graduate_id_type = 2; //TODO

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
        graduate.identification__type_id = graduate_id_type;
        graduate.person__type_id = graduate_type;
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
    },
    getPostulations: function(graduate_id, callback) {
        models.Person.findOne({
            where: {
                identification: graduate_id
            }
        }).then(function(graduate) {
            var res = graduate.getVacancies();
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    postulateToVacancy: function(graduate_id, vacancy_id, callback) {
        models.Person.findOne({
            where: {
                identification: graduate_id
            }
        }).then(function(graduate) {
            models.Vacancy.findOne({where:{id: vacancy_id}}).then(function(vacancy) {
                graduate.addVacancy(vacancy).then(function(res) {
                    callback(null, res);
                })
                .catch(function(err) {
                    callback(err, null);
                });
            }).catch(function(err){
                callback(err, null);
            });
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = GraduateController