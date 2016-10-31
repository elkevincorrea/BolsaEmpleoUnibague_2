'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    firt_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Person;
};