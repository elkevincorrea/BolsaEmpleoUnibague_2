'use strict';

var idTypeRoute = require('./identification_type.js');
var personTypeRoute = require('./person_type.js');
var userRoute = require('./user.js');
var companyRoute = require('./company.js');
var graduateRoute = require('./graduate.js');
var vacancyRoute = require('./vacancy.js');

var routes = [].concat(userRoute, idTypeRoute, personTypeRoute, companyRoute, graduateRoute, vacancyRoute);

module.exports = [{
        method: 'GET',
        path: '/',
        config: {
            auth: false
        },
        handler: function(req, reply) {
            reply.file('./public/index.html');
        }
    },
    {
        method: 'GET',
        path: '/info',
        config: {
            auth: false
        },
        handler: function(req, reply) {
            reply.file('./public/secciones-index.html');
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        config: {
            auth: false
        },
        handler: {
            directory: {
                path: './public',
                listing: false
            }
        }
    },
    {
        method: 'GET',
        path: '/admin',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/admin-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/admin/',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/admin-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/admin/tabla-graduados',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/admin-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/admin/tabla-empresas',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/admin-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/empresa',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/empresa-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/empresa/',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/empresa-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/graduado',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/graduado-panel.html');
        }
    },
    {
        method: 'GET',
        path: '/graduado/',
        config:{
            auth: false
        },
        handler: function(request, reply) {
            reply.file('./public/graduado-panel.html');
        }
    }].concat(routes);