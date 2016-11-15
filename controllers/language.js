'use strict';

var models = require('../models');

var LanguageController = {
    getAll: function(callback) {
        models.Language.findAll().then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Language.findById(id).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    create: function(language, callback) {
        models.Language.create(language).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(language, callback) {
        models.Language.update(language, {
            where: {
                id: language.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(language_id, callback) {
        models.Language.destroy({
            where: {
                id: language_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = LanguageController