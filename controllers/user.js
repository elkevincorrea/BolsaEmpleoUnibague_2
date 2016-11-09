'use strict';

const passwordCrypt = require('../util/password-crypt.js');

var models = require('../models');

var UserController = {
    getAll: function(callback) {
        models.User.findAll({
                include: [models.Person, models.Company]
            }).then(function(users) {
            callback(null, users);
        }, function(err) {
            callback(err, null);
        });
    },
    create: function(user, callback) {
        passwordCrypt.cryptPassword(user.password, function(err, hash) {
            if(err){
                callback(err, null);
            }else{
                user.password = hash;
                models.User.create(user, {
                    include: [models.Person, models.Company]
                }).then(function(res) {
                    callback(null, res);
                }, function(err) {
                    callback(err, null);
                });
            }
        });
    },
    getCompanyById: function(user, callback) {
        models.User.findOne({
            where: {
                company_identification: user.identification
            },
            include: [models.Company]
        }).then(function(resUser) {
            passwordCrypt.comparePassword(user.password, resUser.password, function(err, res) {
                if(err){
                    //Contraseña Incorrecta
                    callback(err, null);
                }else{
                    if(res == true){
                        callback(null, resUser);
                    }else{
                        callback({
                            message: 'Contraseña incorrecta'
                        }, null);
                    }
                }
            })
        });
    },
    getUserByEmail: function(email, callback) {
        models.User.findOne({
            where: {
                email: email
            },
            include: [models.Company]
        }).then(function(resUser){
            callback(null, resUser);
        }).then(function(err){
            callback(err, null);
        });
    }
}

module.exports = UserController;