'use strict';
module.exports = function(sequelize, DataTypes) {
  var Graduate = sequelize.define('Graduate', {
    
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        Graduate.belongsTo(models.Person, {
          foreignKey: {
            field: 'person_id',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        });

        Graduate.belongsTo(models.User, {
          foreignKey: {
            field: 'user_email',
            key: 'email'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        });       
      }
    }
  });
  return Graduate;
};