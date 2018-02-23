const Sequelize = require('sequelize');
const db = require('./db.js');


const Post = db.config.db.define('post', {
  uid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: Sequelize.STRING},
  body: {type: Sequelize.TEXT},
});

// db.Post.create({
  // uid: null,
  // title: 'Dat new new',
  // body: 'Whattup'
// });

// const Post = db.define('post', {
//   postId: { type: db.INTEGER, autoIncrement: true },
//   title: db.STRING,
//   body: db.STRING,
// })

exports.models = {
  post: Post
}