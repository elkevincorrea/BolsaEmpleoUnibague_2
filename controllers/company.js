'use strict';

var models = require('../models');

var CompanyController = {
    getAll: function(callback) {
        models.Company.findAll({
            include: [models.Identification_Type, models.Vacancy]
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Company.findOne({
            where: {
                identification: id
            },
            include: [models.Identification_Type, models.Vacancy]
        }).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getVacancies: function(id, callback) {
        models.Company.findOne({
            where: {
                identification: id
            },
            include: [models.Vacancy]
        }).then(function(res) {
            callback(null, res.Vacancies);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getPostulatesVacancy: function(company_id, vacancy_id, callback) {
        models.Vacancy.findOne({
            where: {
                company_identification: company_id,
                id: vacancy_id
            }
        }).then(function(res) {
            if(res){
                callback(null, res.getPeople());
            }else{
                callback({message: 'No encontrada'}, null);
            }
        }).catch(function(err) {
            callback(err, null);
        });
    },
    updatePostulation: function(company_id, vacancy_id, person_id, status, callback) {
        models.Vacancy.findOne({
            where: {
                company_identification: company_id,
                id: vacancy_id
            }
        }).then(function(res) {
            if(res){
                models.Postulation.findOne({
                    where: {
                        vacancy_id: vacancy_id,
                        person_id: person_id
                    }
                }).then(function(postulation) {
                    postulation.update({
                        postulation__status_id: status
                    }).then(function(updateRecords) {
                        callback(null, updateRecords);
                    }).catch(function(err) {
                        callback(err, null);
                    });
                }).catch(function(err) {
                    callback(err, null);
                });
            }else{
                callback({message: 'No encontrada'}, null);
            }
        }).catch(function(err) {
            callback(err, null);
        });
    },
    create: function(company, callback) {
        models.Company.create(company).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(company, callback) {
        models.Company.update(company, {
            where: {
                identification: company.identification
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(company_id, callback) {
        models.Company.destroy({
            where: {
                identification: company_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = CompanyController