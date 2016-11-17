'use strict';

var models = require('../models');

var VacancyController = {
    getAll: function(callback) {
        models.Vacancy.findAll().then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Vacancy.findById(id).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getByCompany: function(company_identification, callback) {
        models.Vacancy.find({
            where: {
                company_id: company_identification
            }
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    //TODO: GetByDegree (s)
    create: function(vacancy, callback) {
        models.Vacancy.create(vacancy, {
            include: [models.Job, models.Professional_Profile]
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(vacancy, callback) {
        models.Vacancy.update(vacancy, {
            where: {
                id: vacancy.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(vacancy_id, callback) {
        models.Vacancy.destroy({
            where: {
                id: vacancy_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = VacancyController