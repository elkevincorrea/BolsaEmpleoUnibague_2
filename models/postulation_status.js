'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postulation_Status = sequelize.define('Postulation_Status', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      tableName: 'Postulation_Status',
      associate: function(models) {
      }
    }
  });
  return Postulation_Status;
};