'use strict';

const {query} = require("express");
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.sequelize.transaction(t => {
          return Promise.all([
              queryInterface.createTable('Contacts', {
                  contactId: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  name: {
                      type: Sequelize.STRING(256),
                      allowNull: false
                  },
                  firstName: {
                      type: Sequelize.STRING(256),
                      allowNull: true
                  },
                  email: {
                      type: Sequelize.STRING(512),
                      allowNull: false
                  },
                  message: {
                      type: Sequelize.STRING(4096),
                      allowNull: false
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              }, {transaction: t}),

              queryInterface.createTable('Users', {
                  userId: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  email: {
                      type: Sequelize.STRING(512),
                      allowNull: false
                  },
                  googleId: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  password: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  salted: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  lostPasswordToken: {
                      type: Sequelize.STRING(1024),
                      allowNull: true
                  },
                  name: {
                      type: Sequelize.STRING(512),
                      allowNull: false
                  },
                  role: {
                      type: Sequelize.STRING(16),
                      allowNull: false
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              },{transaction: t}),

              queryInterface.createTable('Events', {
                  eventId: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  type: {
                      type: Sequelize.STRING(32),
                      allowNull: true
                  },
                  date: {
                      type: Sequelize.DATE,
                      allowNull: true
                  },
                  label: {
                      type: Sequelize.STRING(256),
                      allowNull: true
                  },
                  description: {
                      type: Sequelize.STRING(4096),
                      allowNull: true
                  },
                  street: {
                      type: Sequelize.STRING(256),
                      allowNull: true
                  },
                  zipCode: {
                      type: Sequelize.STRING(16),
                      allowNull: true
                  },
                  town: {
                      type: Sequelize.STRING(256),
                      allowNull: true
                  },
                  website: {
                      type: Sequelize.STRING(512),
                      allowNull: true
                  },
                  picture: {
                      type: Sequelize.BOOLEAN,
                      allowNull: false
                  },
                  favorite: {
                      type: Sequelize.BOOLEAN,
                      allowNull: false
                  },
                  showEvent: {
                      type: Sequelize.BOOLEAN,
                      allowNull: false
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              },{transaction: t}),

              queryInterface.createTable('Pictures', {
                  pictureId: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  order: {
                      type: Sequelize.INTEGER,
                      allowNull: false
                  },
                  createdAt: {
                      type: Sequelize.DATE
                  },
                  updatedAt: {
                      type: Sequelize.DATE
                  }
              },{transaction: t})
          ])
      })
  },

  async down (queryInterface) {
      return queryInterface.sequelize.transaction(t => {
          return Promise.all([
              queryInterface.dropTable('Pictures',{transaction: t}),
              queryInterface.dropTable('Events',{transaction: t}),
              queryInterface.dropTable('Users',{transaction: t}),
              queryInterface.dropTable('Contacts',{transaction: t})
          ]);
      })
  }
};
