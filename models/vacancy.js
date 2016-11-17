'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vacancy = sequelize.define('Vacancy', {
    salary: {
      type: DataTypes.INTEGER
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        Vacancy.belongsTo(models.Company, {
          foreignKey: {
            field: 'company_id',
            allowNull: false
          }
        });
        Vacancy.belongsTo(models.Job,{
          foreignKey: {
            field: 'job_id'
          }
        });
        Vacancy.belongsTo(models.Professional_Profile, {
          foreignKey: {
            field: 'professional_profile_id',
          }
        });
        Vacancy.belongsToMany(models.Person, {
          through: models.Postulation,
          foreignKey: 'vacancy_id'
        });
      }
    }
  });
  return Vacancy;
};