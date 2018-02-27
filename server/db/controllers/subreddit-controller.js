const db = require('../db.js');
const model = require('../models/subreddit.js');

// Subreddit Controllers

exports.getSubreddit = (req, res) => {
  const id = req.params.id;
  model.Subreddit.findOne({
    where: {
      id,
    },
  }).then(
    (subreddit) => {
      res.status(200).send(subreddit);
    },
    (err) => {
      console.log(err);
    },
  );
};

exports.allSubredditNames = (req, res) => {
  model.Subreddit.findAll({
    attributes: ['name'],
  }).then(
    (subreddits) => {
      // // console.log(subreddits);
      // console.log('gtotten');
      // res.send();
      res.status(200).send(subreddits);
    },
    (err) => {
      console.log(err);
    },
  );
};

exports.createSubreddit = (req, res) => {
  const name = req.body.subreddit.name;
  const description = req.body.subreddit.description;
  model.Subreddit.sync()
    .then(() =>
      model.Subreddit.create({
        name,
        description,
      }))
    .then((subreddit) => {
      console.log(subreddit);
      res.status(200).send(subreddit);
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
