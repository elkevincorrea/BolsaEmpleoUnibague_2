'use strict';

const JWT = require('jsonwebtoken');
const config = require('../config/config.json');

module.exports = {
    createToken: function(user) {
        return JWT.sign(user, config.secretkey);
    }
}