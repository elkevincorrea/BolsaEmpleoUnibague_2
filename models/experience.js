'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experience = sequelize.define('Experience', {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        Experience.belongsTo(models.Job, {
          foreignKey: {
            field: 'job_id',
            allowNull: false
          }
        });
      }
    }
  });
  return Experience;
};