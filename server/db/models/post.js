const Sequelize = require('sequelize');
const db = require('../db.js');


const Post = db.define('post', {
  uid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: Sequelize.STRING },
  body: { type: Sequelize.TEXT },
  likeCache: 0,
  commentCache: 0,
  postType: { type: Sequelize.INTEGER },
  image: { type: Sequelize.STRING },

});

module.exports = {
  post: Post
};