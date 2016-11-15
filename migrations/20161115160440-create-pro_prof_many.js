'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE TABLE "Pro_Prof_Langs"('+ 
      'pro_profile_id INTEGER not null, ' + 
      'languague_id INTEGER not null, ' + 
      'CONSTRAINT pk_pro_prof_langs PRIMARY KEY (pro_profile_id, languague_id),' +
      'CONSTRAINT fk_pro_prof_lang_id FOREIGN KEY (languague_id) references "Languages" (id),' + 
      'CONSTRAINT fk_lang_pro_prof_id FOREIGN KEY (pro_profile_id) references "Professional_Profiles" (id)' +
      ')').then(function() {
        return queryInterface.sequelize.query('CREATE TABLE "Pro_Prof_Degrees"('+ 
          'pro_profile_id INTEGER not null, ' + 
          'degree_id INTEGER not null, ' + 
          'CONSTRAINT pk_pro_prof_degrees PRIMARY KEY (pro_profile_id, degree_id),' +
          'CONSTRAINT fk_pro_prof_degree_id FOREIGN KEY (degree_id) references "Degrees" (id),' + 
          'CONSTRAINT fk_degree_pro_prof_id FOREIGN KEY (pro_profile_id) references "Professional_Profiles" (id)' +
          ')').then(function() {
            return queryInterface.sequelize.query('CREATE TABLE "Pro_Prof_Exps"('+ 
              'pro_profile_id INTEGER not null, ' + 
              'experience_id INTEGER not null, ' + 
              'CONSTRAINT pk_pro_prof_exps PRIMARY KEY (pro_profile_id, experience_id),' +
              'CONSTRAINT fk_pro_prof_exp_id FOREIGN KEY (experience_id) references "Experiences" (id),' + 
              'CONSTRAINT fk_exp_pro_prof_id FOREIGN KEY (pro_profile_id) references "Professional_Profiles" (id)' +
              ')');
          });
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Pro_Prof_Exps').then(function() {
      return queryInterface.dropTable('Pro_Prof_Degrees').then(function() {
        return queryInterface.dropTable('Pro_Prof_Langs');
      });
    });
  }
};
