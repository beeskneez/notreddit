const Sequelize = require('sequelize');
const db = require('../db.js');


const User = db.define('user', {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  likeCache: Sequelize.INTEGER,
  commentCache: Sequelize.INTEGER
});

module.exports = {
  User: User
};