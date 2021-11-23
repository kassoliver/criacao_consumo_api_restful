'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Deliveries',[
    {
      nome: 'Kássia Oliveira',
      peso: 2.5,
      endereco: 'Eponina Peixoto Ribeiro, 621 - Cataguases',
      telefone: '33988008800',

    },
    {
      nome: 'LuizaLabs',
      peso: 2.5,
      endereco: ' R. Maria Prestes Maia, 300 - São Paulo',
      telefone: '33900880088',

    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Deliveries', null, {}),
};
