const db = require('../db.js');
const model = require('../models/post.js');
const utils = require('./helpers.js');

// Post Controllers
exports.getQueryPosts = (req, res) => {
  model.Post.findAll({
    where: {
      [req.query.key]: req.query.value
    }
  })
    .then(posts => res.status(200).send(posts))
    .catch(handleError);
};

exports.getOnePost = (req, res) => {
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

exports.updateOnePost = (req, res) => {
  const query = Object.entries(req.body);
  const id = req.params.id;
  model.Post.findOne({
    where: {
      id
    }
  })
    .then(post => {
      query.forEach(([key, value]) => post.update({ [key]: value }));
      res.status(200).send(post);
    })
    .catch(handleError);
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
    .then(post => res.status(200).send({ data: 'success' }))
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
