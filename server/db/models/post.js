const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./user.js');
const Subreddit = require('./subreddit.js');

let Post;

const definePost = () => new Promise((resolve, reject) => {
  Post = db.define('post', {
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
    // id_sudreddit: Sequelize.UUID
  });
});

definePost()
  .then(() => {
    Post.belongsTo(Post, { foreignKey: 'id_parent' });
    Post.belongsTo(User);
    Post.belongsTo(Subreddit);
  })
  .catch(() => {
    console.log('error creating posts');
  });

module.exports = {
  Post,
};
