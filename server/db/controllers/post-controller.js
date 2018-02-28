const db = require('../db.js');
const model = require('../models/post.js');

// Post Controllers
exports.getAllPosts = (req, res) => {
  // find all posts by one user
  console.log(req.query.user);
  if (req.query.user) {
    model.Post.findAll({
      where: {
        user_email: req.query.user,
      },
    })
      .then((posts) => {
        res.status(200).send(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // find all posts
    model.Post.findAll({}).then(
      (posts) => {
        res.status(200).send(posts);
      },
      (err) => {
        console.log(err);
      },
    );
  }
};

exports.getPost = (req, res) => {
  const id = req.params.id;
  console.log('!!!!!', id);
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

exports.createPost = (req, res) => {
  console.log(req.body.user_email);
  const title = req.body.post.title;
  const body = req.body.post.body;
  const image = req.body.post.image;
  const subreddit = req.body.post.subreddit;
  const user_email = req.body.post.user_email;
  const username = req.body.post.username;

  model.Post.sync()
    .then(() =>
      model.Post.create({
        id: null,
        title,
        body,
        likeCache: 0,
        commentCache: 0,
        upvoteCache: 0,
        downvoteCache: 0,
        image,
        postType: 0,
        user_id: req.body.user_id,
        user_email,
        username,
        subreddit,
      }))
    .then((post) => {
      console.log(post);
      res.status(200).send(post);
    });
};

exports.updatePostWithUpvote = (req, res) => {
  console.log(req);
  model.Post.findById(req.params.id)
    .then(post => post.increment('upvoteCache', { by: 1 }))
    .then((post) => {
      res.status(200).send(post);
    });
};

exports.updatePostWithDownvote = (req, res) => {
  model.Post.findById(req.params.id)
    .then(post => post.increment('downvoteCache', { by: 1 }))
    .then((post) => {
      res.status(200).send(post);
    });
};

exports.updateOne = (req, res) => {
  res.status(200).send('update one');
};

exports.deletePost = (req, res) => {
  model.Post.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => res.status(200).send('deleted'));
};

exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true,
  }).then(() => res.send('deleted all posts'));
};

// Comment Controllers

exports.createComment = (req, res) => {
  const body = req.body.post.body;
  // const subreddit = req.body.post.subreddit;
  const user_email = req.body.post.user_email;
  const parentId = req.body.post.postId;
  const username = req.body.post.username;

  model.Post.sync()
    .then(() =>
      model.Post.create({
        id: null,
        body,
        commentCache: 0,
        upvoteCache: 0,
        downvoteCache: 0,
        postType: 1,
        // user_id: req.body.user_id,
        id_parent: parentId,
        user_email,
        username,
        // subreddit,
      }))
    .then((post) => {
      console.log(post);
      res.status(200).send(post);
    });
};
