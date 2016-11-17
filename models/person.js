'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    identification: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firt_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Person.belongsTo(models.Identification_Type, {
          foreignKey: {
            field: 'id_type_id',
            allowNull: false
          }
        });
        Person.belongsTo(models.Person_Type, {
          foreignKey: {
            field: 'person_type_id',
            allowNull: false
          }
        });
        Person.belongsTo(models.Professional_Profile, {
          foreignKey: {
            field: 'professional_profile_id',
            allowNull: false
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        });
        Person.belongsToMany(models.Company, {
          through: models.Company_Contacts,
          foreignKey: 'person_id'
        });
      }
    }
  });
  return Person;
};