const db = require('../db.js');
const model = require('../models/post.js');

// Subreddit Controllers

exports.getSubreddit = (req, res) => {
  const id = req.params.id;
  model.Post.findOne({
    where: {
      id,
    },
  }).then(
    (post) => {
      res.status(200).send(post);
    },
    (err) => {
      console.log(err);
    },
  );
};

exports.createSubreddit = (req, res) => {
  const title = req.body.post.title;
  const body = req.body.post.body;
  const image = req.body.post.image;
  model.Post.sync()
    .then(() => model.Post.create({
      id: null,
      title,
      body,
      likeCache: 0,
      commentCache: 0,
      image,
      postType: 0,
      user_id: req.body.user_id,
    }))
    .then((post) => {
      console.log(post);
      res.status(200).send(post);
    });
};

// exports.updateOne = (req, res) => {
//   res.status(200).send("update one");
// };

// exports.deletePost = (req, res) => {
//   model.Post.destroy({
//     where: {
//       id: req.body.id
//     }
//   }).then(() => res.status(200).send("deleted"));
// };
