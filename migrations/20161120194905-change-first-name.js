'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('People', 'firt_name', 'first_name');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('People', 'first_name', 'firt_name');
  }
};
