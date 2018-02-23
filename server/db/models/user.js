const Sequelize = require('sequelize');
const db = require('../db.js');const Post = require('./post.js');


let User;

const defineUser = () => {
  return new Promise((resolve, reject) => {
    User = db.define('user', {
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      postVoteCache: Sequelize.INTEGER,
      commentVoteCache: Sequelize.INTEGER
    });
  });
}

defineUser()
  .then(() => {
    User.hasMany(Post);
  })
  .catch(() => {
    console.log('error creating user');
  })

module.exports = {
  User: User
};

// User.hasMany(Post);