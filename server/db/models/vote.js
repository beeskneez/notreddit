const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./user.js');
const Post = require('./post.js');

let Vote;

const createVote = () => {
  return new Promise((resolve, reject) => {
    Vote = db.define('vote', {
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      voteType: Sequelize.INTEGER
    });
  });
}

createVote()
  .then(() => {
    Vote.belongsTo(Post);
    Vote.belongsTo(User);
  })
  .catch(() => {
    console.log('error creating like');
  })
  
  module.exports = {
    Vote: Vote
  }