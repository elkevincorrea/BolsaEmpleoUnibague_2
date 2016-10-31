'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.addColumn('Users', 'identification', {
          type: Sequelize.STRING,
          allowNull: false
        }),
        queryInterface.addColumn('Users', 'identification_type', {
          type: Sequelize.INTEGER,
          references: {
            model: 'Identification_Types',
            key: 'id'
          },
          allowNull: false
        })
      ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.removeColumn('Users', 'identification'),
        queryInterface.removeColumn('Users', 'identification_type')
      ]);
  }
};
