'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person_Type = sequelize.define('Person_Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Person_Type;
};