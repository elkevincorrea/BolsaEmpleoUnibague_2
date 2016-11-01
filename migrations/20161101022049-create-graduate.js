'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Graduates', {
            user: {
                references: {
                    model: 'Users',
                    key: 'email'
                },
                primaryKey: true,
                type: Sequelize.STRING,
                allowNull: false
            },
            person_id: {
                references: {
                    model: 'People',
                    key: 'id'
                },
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Graduates');
    }
};