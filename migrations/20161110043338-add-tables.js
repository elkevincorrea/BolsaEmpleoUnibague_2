'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    }).then(function() {
      return queryInterface.createTable('Languagues', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        }
      }).then(function() {
        return queryInterface.createTable('Experiences', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          company_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          start_date: {
            allowNull: false,
            type: Sequelize.DATE
          },
          end_date: {
            allowNull: false,
            type: Sequelize.DATE
          },
          job_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Jobs',
              key: 'id'
            }
          }
        }).then(function() {
          return queryInterface.createTable('Institutes', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            name: {
              allowNull: false,
              type: Sequelize.STRING
            }
          }).then(function() {
            return queryInterface.createTable('Degrees', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              name: {
                allowNull: false,
                type: Sequelize.STRING
              },
              institute_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                  model: 'Institutes',
                  key: 'id'
                }
              }
            }).then(function() {
              return queryInterface.createTable('Professional_Profiles', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                description: {
                  type: Sequelize.TEXT,
                  allowNull: false
                },
                experience_time: {
                  type: Sequelize.INTEGER
                }
              }).then(function() {
                return queryInterface.createTable('Vacancies', {
                  id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                  },
                  company_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                      model: 'Companies',
                      key: 'identification'
                    }
                  },
                  job_id:{
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                      model: 'Jobs',
                      key: 'id'
                    }
                  },
                  salary: {
                    type: Sequelize.INTEGER
                  },
                  created_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                  },
                  end_date: {
                    allowNull: false,
                    type: Sequelize.DATE
                  }
                });
              });
            });
          });
        });
      });
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Vacancies').then(function(){
      return queryInterface.dropTable('Professional_Profiles').then(function() {
        return queryInterface.dropTable('Degrees').then(function() {
          return queryInterface.dropTable('Institutes').then(function() {
            return queryInterface.dropTable('Experiences').then(function() {
              return queryInterface.dropTable('Languagues').then(function() {
                return queryInterface.dropTable('Jobs');
              });
            });
          })
        })
      });
    });
  }
};
