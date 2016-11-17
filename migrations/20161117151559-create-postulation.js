'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Postulation_Status', {
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
    }).then(function() {
      return queryInterface.sequelize.query('CREATE TABLE "Postulations"('+ 
        'vacancy_id INTEGER not null, ' + 
        'person_id INTEGER not null, ' +
        'status INTEGER not null,'+ 
        'CONSTRAINT pk_postulations PRIMARY KEY (vacancy_id, person_id),' +
        'CONSTRAINT fk_postultation_person FOREIGN KEY (person_id) references "People" (identification),' + 
        'CONSTRAINT fk_postulation_vacancy FOREIGN KEY (vacancy_id) references "Vacancies" (id),' +
        'CONSTRAINT fk_postulation_status FOREIGN KEY (status) references "Postulation_Status" (id)'+
        ')');
    });    
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Postulations').then(function(){
      return queryInterface.dropTable('Postulation_States');
    }
    );
  }
};
