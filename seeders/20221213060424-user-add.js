'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [{
         name: 'sunil kawadi',
         email: 'sunilkawadiworks@gmail.com',
         password: 'sunil',
         createdAt: new Date(),
         updatedAt: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Users', null, {});
    
  }
};
