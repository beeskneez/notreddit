const db = require("../db.js");
const model = require("../models/post.js");

// Post Controllers
exports.getAllPosts = (req, res) => {
  model.Post.findAll({}).then(
    function(posts) {
      res.status(200).send(posts);
    },
    function(err) {
      console.log(err);
    }
  );
};

exports.getPost = (req, res) => {
  let id = req.params.id;
  model.Post.findOne({
    where: {
      id: id
    }
  }).then(
    function(post) {
      res.status(200).send(post);
    },
    function(err) {
      console.log(err);
    }
  );
};

exports.createPost = (req, res) => {
  let title = req.body.post.bodytitle;
  let body = req.body.post.body;
  let image = req.body.post.image;
  model.Post.sync()
    .then(function() {
      return model.Post.create({
        id: null,
        title: title,
        body: body,
        likeCache: 0,
        commentCache: 0,
        image: image,
        postType: 0,
        user_id: req.body.user_id
      });
    })
    .then(function(post) {
      console.log(post);
      res.status(200).send(post);
    });
};

exports.updateOne = (req, res) => {
  res.status(200).send("update one");
};

exports.deletePost = (req, res) => {
  model.Post.destroy({
    where: {
      id: req.body.id
    }
  }).then(() => res.status(200).send("deleted"));
};

exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true
  }).then(() => res.send("deleted all posts"));
};

// Comment Controllers

exports.createComment = (req, res) => {
  let body = req.body.body;
  model.Post.sync()
    .then(function() {
      return model.Post.create({
        id: null,
        body: body,
        likeCache: 0,
        commentCache: 0,
        postType: 1
        // id_parent: need to implement on event register
      });
    })
    .then(function(comment) {
      res.status(200).send(comment);
    });
};
