'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Vacancies', 'professional_profile_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Professional_Profiles',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Vacancies', 'professional_profile_id');
  }
};
