'use strict';
module.exports = function(sequelize, DataTypes) {
  var Degree = sequelize.define('Degree', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        Degree.belongsTo(models.Institute, {
          foreignKey: {
            references: {
              field: 'institute_id',
              allowNull: false
            }
          }
        });
      }
    }
  });
  return Degree;
};