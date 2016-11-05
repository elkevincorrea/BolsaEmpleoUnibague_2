'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable('Identification_Types', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }),
      queryInterface.createTable('Person_Type', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }),
      queryInterface.createTable('People', {
        identification: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        id_type_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Identification_Types',
            key: 'id'
          }
        },
        person_type_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Person_Type',
            key: 'id'
          }
        },
        firt_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING
        },
        gender: {
          type: Sequelize.STRING(1),
          allowNull: false
        }
      }),
      queryInterface.createTable('Companies', {
        identification: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        id_type_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Identification_Types',
            key: 'id'
          }
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        website: {
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING
        },
      }),
      queryInterface.createTable('Users', {
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        company_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Companies',
            key: 'identification'
          }
        },
        person_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'People',
            key: 'identification'
          }
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Users'),
      queryInterface.dropTable('Companies'),
      queryInterface.dropTable('People'),
      queryInterface.dropTable('Person_Type'),
      queryInterface.dropTable('Identification_Types')
    ]);
  }
};
