'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Students', [{
      name: 'subham', 
      email: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date()
         
       }], {});
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('Students', null, {});
     
  }
};
