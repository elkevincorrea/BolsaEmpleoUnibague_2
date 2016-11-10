'use strict';
module.exports = function(sequelize, DataTypes) {
  var Professional_Profile = sequelize.define('Professional_Profile', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    experience_time: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        
      }
    }
  });
  return Professional_Profile;
};