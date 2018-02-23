const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./user.js');

const createPosts = () => {
  return new Promise((resolve, reject) => {
    const Post = db.define('post', {
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      title: Sequelize.STRING,
      body: Sequelize.TEXT,
      likeCache: Sequelize.INTEGER,
      commentCache: Sequelize.INTEGER,
      image: Sequelize.STRING,
      postType: Sequelize.INTEGER,
      // 0 is post, 1 is comment
      id_parent: Sequelize.INTEGER
    });
  });
}

createPosts()
  .then(() => {
    Post.belongsTo(Post, {foreignKey: 'id_parent'});
    Post.belongsTo(User);
    module.exports = {
      Post: Post
    }
  })
  .catch(() => {
    console.log('error creating posts');
  })


// Post.belongsTo(Subreddit)