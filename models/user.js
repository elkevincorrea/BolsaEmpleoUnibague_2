'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(45),
      primaryKey: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
  }, {
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsTo(models.Role, {
          foreignKey: {
            field: 'role_id',
            allowNull: false
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        });
      }
    }
  });
  return User;
};