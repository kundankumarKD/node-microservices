const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('micro_db', 'user', 'password', {
  host: 'db',
  dialect: 'mysql'
});

module.exports = sequelize;
