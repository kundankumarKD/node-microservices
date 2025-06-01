const { DataTypes } = require('sequelize');
// const sequelize = new Sequelize('user_db', 'user', 'password', {
//   host: 'db',
//   dialect: 'mysql'
// });
const sequelize = require('../shared/db-config');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

module.exports = User;
