'use strict';

var models = require('../models');

var JobController = {
    getAll: function(callback) {
        models.Job.findAll().then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getById: function (id, callback) {
        models.Job.findById(id).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    create: function(job, callback) {
        models.Job.create(job).then(function(res) {
            callback(null, res);
        }).catch(function(err) {
            callback(err, null);
        });
    },
    update: function(job, callback) {
        models.Job.update(job, {
            where: {
                id: job.id
            }
        }).then(function(updateRecords) {
            callback(null, updateRecords);
        }).catch(function(err){
            callback(err, null);
        });
    },
    delete: function(job_id, callback) {
        models.Job.destroy({
            where: {
                id: job_id
            }
        }).then(function(deletedRecords) {
            callback(null, deletedRecords);
        }).catch(function(err) {
            callback(err, null);
        });
    }
}

module.exports = JobController