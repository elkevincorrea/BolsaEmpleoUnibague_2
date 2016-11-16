'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pro_Prof_Exp = sequelize.define('Pro_Prof_Exps', {
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Pro_Prof_Exps',
    classMethods: {
    }
  });
  return Pro_Prof_Exp;
};