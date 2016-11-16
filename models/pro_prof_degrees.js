'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pro_Prof_Degree = sequelize.define('Pro_Prof_Degrees', {
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Pro_Prof_Degrees',
    classMethods: {
    }
  });
  return Pro_Prof_Degree;
};