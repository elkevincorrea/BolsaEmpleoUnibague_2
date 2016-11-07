'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(45),
      primaryKey: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Person, {
          foreignKey: {
            field: 'person_id',
            allowNull: true
          },
          onUpdate: 'cascade'
        });
        User.belongsTo(models.Company, {
          foreignKey: {
            field: 'company_id',
            allowNull: true
          },
          onUpdate: 'cascade'
        });
      }
    }
  });
  return User;
};