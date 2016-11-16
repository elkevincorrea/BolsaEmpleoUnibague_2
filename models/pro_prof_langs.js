'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pro_Prof_Lang = sequelize.define('Pro_Prof_Langs', {
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Pro_Prof_Langs',
    classMethods: {
    }
  });
  return Pro_Prof_Lang;
};