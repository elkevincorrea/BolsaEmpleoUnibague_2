'use strict';

var models = require('../models');

var CompanyController = {
    getAll: function(callback) {
        models.Company.findAll({
            include: [models.Identification_Type, models.Person, models.Vacancy]
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
            include: [models.Identification_Type, models.Person, models.Vacancy]
        }).then(function(res) {
            callback(null, res);
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