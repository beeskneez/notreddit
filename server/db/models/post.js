const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./user.js');
const Subreddit = require('./subreddit.js');

// let Post;

<<<<<<< HEAD
const definePost = () =>
  new Promise((resolve, reject) => {
    Post = db.define('post', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: Sequelize.STRING,
      body: Sequelize.STRING,
      // voteCache: Sequelize.INTEGER,
      commentCache: Sequelize.INTEGER,
      image: Sequelize.STRING,
      upvoteCache: Sequelize.INTEGER,
      downvoteCache: Sequelize.INTEGER,
      postType: Sequelize.INTEGER,
      // 0 is post, 1 is comment
      id_parent: Sequelize.INTEGER,
      id_user: Sequelize.INTEGER,
      // id_sudreddit: Sequelize.INTEGER,
      subreddit: Sequelize.STRING,
    });
  });

definePost()
  .then(() => {
    Post.belongsTo(Post, { foreignKey: 'id_parent' });
    Post.belongsTo(User);
    Post.belongsTo(Subreddit, { foreignKey: 'id_subreddit' });
  })
  .catch(() => {
    console.log('error creating posts');
  });
=======
// const definePost = () =>
// new Promise((resolve, reject) => {
const Post = db.define('post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  // voteCache: Sequelize.INTEGER,
  commentCache: Sequelize.INTEGER,
  image: Sequelize.STRING,
  upvoteCache: Sequelize.INTEGER,
  downvoteCache: Sequelize.INTEGER,
  postType: Sequelize.INTEGER,
  // 0 is post, 1 is comment
  id_parent: Sequelize.UUID,
  id_user: Sequelize.UUID,
  subreddit: Sequelize.STRING,
  // id_sudreddit: Sequelize.UUID
});
// });

// definePost()
//   .then(() => {
//     Post.belongsTo(Post, { foreignKey: 'id_parent' });
//     Post.belongsTo(User);
//     Post.belongsTo(Subreddit, { foreignKey: 'id_subreddit' });
//   })
//   .catch(() => {
//     console.log('error creating posts');
//   });
>>>>>>> adf1f084289df869c3022b3470f580525723ca2f

module.exports = {
  Post,
};
