'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE TABLE "Company_Contacts"('+ 
    'company_id INTEGER not null, ' + 
    'person_id INTEGER not null, ' + 
    'CONSTRAINT pk_company_contact PRIMARY KEY (company_id, person_id),' +
    'CONSTRAINT fk_contacts_per_id FOREIGN KEY (person_id) references "People" (identification),' + 
    'CONSTRAINT fk_contacts_com_id FOREIGN KEY (company_id) references "Companies" (identification)' +
    ')');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Company_Contacts');
  }
};
