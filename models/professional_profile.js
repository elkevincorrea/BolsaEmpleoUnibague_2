'use strict';
module.exports = function(sequelize, DataTypes) {
  var Professional_Profile = sequelize.define('Professional_Profile', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    experience_time: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        Professional_Profile.belongsToMany(models.Degree, {
          as: 'Degrees',
          through: models.Pro_Prof_Degrees
        });
        Professional_Profile.belongsToMany(models.Experience, {
          as: 'Experiences',
          through: models.Pro_Prof_Exps
        });
        Professional_Profile.belongsToMany(models.Language, {
          as: 'Languages',
          through: models.Pro_Prof_Langs
        });
      }
    }
  });
  return Professional_Profile;
};