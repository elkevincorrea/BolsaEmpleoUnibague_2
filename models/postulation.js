'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postulation = sequelize.define('Postulation', {
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'Postulations',
    classMethods: {
      associate: function(models) {
        Postulation.belongsTo(models.Postulation_Status, {
          foreignKey: {
            field: 'status',
            allowNull: false
          }
        });
      }
    }
  });
  return Postulation;
};