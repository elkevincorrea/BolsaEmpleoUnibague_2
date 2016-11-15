'use strict';
module.exports = function(sequelize, DataTypes) {
  var Company_Contacts = sequelize.define('Company_Contacts', {
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Company_Contacts',
    classMethods: {
    }
  });
  return Company_Contacts;
};