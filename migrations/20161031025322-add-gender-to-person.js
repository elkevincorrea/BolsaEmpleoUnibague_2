'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('People', 'gender_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Genders',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('People', 'gender');
  }
};
