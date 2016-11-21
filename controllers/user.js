'use strict';

const passwordCrypt = require('../util/password-crypt.js');

var models = require('../models');

const graduate_type = 1; // TODO

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
    createCompany: function(user, callback) {
        passwordCrypt.cryptPassword(user.password, function(err, hash) {
            if(err){
                callback(err, null);
            }else{
                user.password = hash;
                models.User.create(user, {
                    include: [models.Company]
                }).then(function(res) {
                    callback(null, res);
                }, function(err) {
                    callback(err, null);
                });
            }
        });
    },
    createGraduate: function(user, callback) {
        models.Person.findOne({
            where: {
                identification: user.identification,
                person__type_id: graduate_type
            }
        }).then(function(graduate) {
            if(graduate){
                passwordCrypt.cryptPassword(user.password, function(err, hash) {
                    if(err){
                        callback(err, null);
                    }else{
                        user.password = hash;
                        user.person_identification = graduate.identification;
                        models.User.create(user, {
                            include: [models.Person]
                        }).then(function(res) {
                            callback(null, res);
                        }, function(err) {
                            callback(err, null);
                        });
                    }
                });
            }else{
                callback({message: 'Person not found'}, null);
            }
        }).catch(function(err) {
            callback(err, null);
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
        }).catch(function(err) {
            callback(err, null);
        });
    },
    getGraduateById: function(user, callback) {
        models.User.findOne({
            where: {
                person_identification: user.identification
            },
            include: [models.Person]
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
            include: [models.Company, models.Person]
        }).then(function(resUser){
            callback(null, resUser);
        }).catch(function(err){
            callback(err, null);
        });
    }
}

module.exports = UserController;