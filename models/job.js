'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        
      }
    }
  });
  return Job;
};