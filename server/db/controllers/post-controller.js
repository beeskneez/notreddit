const model = require('../models/post.js');
const utils = require('./helpers.js');

// Post Controllers
// ALL posts
exports.getAllPosts = (req, res) => {
  model.Post.findAll({
    where: {
      postType: 0
    }
  })
    .then(posts => res.status(200).send(posts))
    .catch(handleError);
};

// QUERIED posts
exports.getSomePosts = (req, res) => {
  const { key, value, postType } = req.query;
  model.Post.findAll({
    where: {
      [key]: value,
      postType
    }
  })
    .then(posts => res.status(200).send(posts))
    .catch(handleError);
};

// GET ONE post
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
// CREATE post
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

// UPDATE post
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

// DELETE ONE post
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

// DELETE ALL posts
exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true
  })
    .then(() => res.send('deleted all posts'))
    .catch(handleError);
};

// SEARCH posts
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
