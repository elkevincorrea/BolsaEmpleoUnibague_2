'use strict';
module.exports = function(sequelize, DataTypes) {
  var Languague = sequelize.define('Language', {
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
  return Languague;
};