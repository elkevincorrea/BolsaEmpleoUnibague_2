'use strict';
module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    identification: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Company.belongsTo(models.Identification_Type, {
          foreignKey: {
            field: 'id_type_id',
            allowNull: false
          }
        });
      }
    }
  });
  return Company;
};