'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    firt_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    underscored: true,
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Person.belongsTo(models.Gender, {
          foreignKey: {
            field: 'gender_id',
            allowNull: false
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        });
      }
    }
  });
  return Person;
};