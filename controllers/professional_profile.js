'use strict';

var models = require('../models');

var ProfessionalProfileController = {
    getAll: function(callback) {
        models.Professional_Profile.findAll().then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Professional_Profile.findById(id).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getByGraduate: function(graduate_id, callback) {
        models.Person.findOne({
            where: {
                identification: graduate_id
            },
            include: [models.Professional_Profile]
        }).then(function(res) {
            callback(null, res.Professional_Profile);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    create: function(profile, callback) {
        models.Professional_Profile.create(profile).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(profile, callback) {
        models.Professional_Profile.update(profile, {
            where: {
                id: profile.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(profile_id, callback) {
        models.Professional_Profile.destroy({
            where: {
                id: profile_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = ProfessionalProfileController