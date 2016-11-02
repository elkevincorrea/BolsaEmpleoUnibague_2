'use strict';

var models = require('../models');

var GraduateController = {
    create: function(graduate, callback) {
        models.Graduate.create({
            include: [models.User, models.Person]
        }).then(function(res) {
            callback(null, res);
        }).then(function(err) {
            callback(err, null);
        });
    }
}

module.exports = GraduateController;