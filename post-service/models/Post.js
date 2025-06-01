const { DataTypes } = require('sequelize');

// const sequelize = new Sequelize('post_db', 'user', 'password', {
//   host: 'db',
//   dialect: 'mysql'
// });

const sequelize = require('../shared/db-config');

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
});

module.exports = Post;
