'use strict';
module.exports = function(sequelize, DataTypes) {
  var Identification_Type = sequelize.define('Identification_Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Identification_Type;
};