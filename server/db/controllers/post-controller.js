const db = require('../db.js');
const model = require('../models/post.js');
const utils = require('./helpers.js');

// Post Controllers
exports.getAllPosts = (req, res) => {
  console.log('GET ALL POSTS---->', req.query);

  if (req.params.id) {
    utils.getComments(req, res);
  } else if (req.query.subredditName) {
    utils.getSubredditPosts(req, res);
  } else if (req.query.user) {
    utils.getUserPosts(req, res);
  } else {
    utils.getAllPosts(req, res);
  }
};

exports.getCertainPosts = (req, res) => {
  model.Post.findAll({
    where: {
      subreddit: req.query.name
    }
  })
    .then(posts => res.status(200).send(posts))
    .catch(handleError);
};

exports.getPost = (req, res) => {
  const id = req.params.id;
  model.Post.findOne({
    where: {
      id
    }
  })
    .then(post => res.status(200).send(post))
    .catch(handleError);
};

exports.createPost = (req, res) => {
  if (req.body.post.parentId) {
    if (req.body.post.comment) {
      utils.createNestedComment(req, res);
    } else {
      utils.createComment(req, res);
    }
  } else {
    utils.createPost(req, res);
  }
};

exports.updatePostWithUpvote = (req, res) => {
  console.log('FROM CONTROLLER----->', req.params);

  model.Post.findById(req.params.id)
    .then(post => post.increment('votes', { by: 1 }))
    .then(post => {
      res.status(200).send(post);
    })
    .catch(handleError);
};

exports.updatePostWithDownvote = (req, res) => {
  model.Post.findById(req.params.id)
    .then(post => post.decrement('votes', { by: 1 }))
    .then(post => {
      res.status(200).send(post);
    })
    .catch(handleError);
};

exports.updateOne = (req, res) => {
  res.status(200).send('update one');
};

exports.deletePost = (req, res) => {
  model.Post.destroy({
    where: {
      $or: {
        id: {
          $eq: req.params.id
        },
        id_parent: {
          $eq: req.params.id
        }
      }
    }
  })
    .then(() => res.status(200).send('deleted'))
    .catch(handleError);
};

exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true
  })
    .then(() => res.send('deleted all posts'))
    .catch(handleError);
};

exports.searchPosts = (req, res) => {
  model.Post.findAll({
    where: {
      title: {
        $like: `%${req.body.search}%`
      }
    }
  })
    .then(posts => res.status(200).send(posts))
    .catch(handleError);
};

const handleError = err => console.error(err);
