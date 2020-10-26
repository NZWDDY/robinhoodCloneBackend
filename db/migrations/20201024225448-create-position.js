'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Positions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stockSymbol: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stockName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      currentPrice: {
        type: Sequelize.INTEGER
      },
      buyPrice: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shares: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Positions');
  }
};