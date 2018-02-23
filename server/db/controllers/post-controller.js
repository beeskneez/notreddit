const db = require('../db.js');
const model = require('../models/post.js');

// TODO: create model for these to do something with
exports.getAllPosts = (req, res) => {
  model.Post.findAll({}).then(function(posts) {
    res.status(200).send(posts);
  }, function(err) {
    console.log(err);
  })
};

exports.getPost = (req, res) => {
  let id = req.params.id;
  model.Post.findOne({
    where: {
      id: id
    }
  }).then(function(post) {
    res.status(200).send(post);
  }, function(err) {
      console.log(err);
  });
};

exports.createPost = (req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let image = req.body.image;
  model.Post.sync()
    .then(function() {
      return model.Post.create({
        id: null,
        title: title,
        body: body,
        likeCache: 0,
        commentCache: 0,
        image: image,
        postType: 0
      })
    })
    .then(function(post) {
      res.status(200).send(post);
    });
};

exports.updateOne = (req, res) => {
  res.status(200).send('update one');
};

exports.deletePost = (req, res) => {
  model.Post.destroy({
    where: {
      id: req.body.id
    }
  }).then(() => res.status(200).send('deleted'));
  // res.status(200).send('delete one');
};

exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true
  }).then(() => res.send('deleted all'));
}