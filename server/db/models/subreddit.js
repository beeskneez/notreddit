const Sequelize = require('sequelize');
const db = require('../db.js');


const Subreddit = db.define('subreddit', {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  description: Sequelize.STRING
});

module.exports = {
  Subreddit: Subreddit
};