const db = require('../db.js');
const model = require('../models/post.js');

// Post Controllers
exports.getAllPosts = (req, res) => {
  model.Post.findAll({}).then(
    posts => {
      res.status(200).send(posts);
    },
    err => {
      console.log(err);
    }
  );
};

exports.getPost = (req, res) => {
  const id = req.params.id;
  model.Post.findOne({
    where: {
      id
    }
  }).then(
    post => {
      res.status(200).send(post);
    },
    err => {
      console.log(err);
    }
  );
};

exports.createPost = (req, res) => {
  console.log(req.body);
  const title = req.body.post.title;
  const body = req.body.post.body;
  const image = req.body.post.image;
  const subreddit = req.body.post.subreddit;
  model.Post.sync()
    .then(() =>
      model.Post.create({
        id: null,
        title: title,
        body: body,
        likeCache: 0,
        commentCache: 0,
        upvoteCache: 0,
        downvoteCache: 0,
        image: image,
        postType: 0,
<<<<<<< HEAD
        user_id: req.body.user_id
      })
    )
    .then(post => {
=======
        user_id: req.body.user_id,
        subreddit,
      }))
    .then((post) => {
>>>>>>> [feat] Subreddit dropdown stylized and homepage rendering subreddits dynamically
      console.log(post);
      res.status(200).send(post);
    });
};

exports.updatePostWithUpvote = (req, res) => {
  console.log(req);
  model.Post.findById(req.params.id)
    .then(post => {
      return post.increment('upvoteCache', { by: 1 });
    })
    .then(post => {
      res.status(200).send(post);
    });
};

exports.updatePostWithDownvote = (req, res) => {
  model.Post.findById(req.params.id)
    .then(post => {
      return post.increment('downvoteCache', { by: 1 });
    })
    .then(post => {
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
};

exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true
  }).then(() => res.send('deleted all posts'));
};

// Comment Controllers

exports.createComment = (req, res) => {
  const body = req.body.body;
  model.Post.sync()
    .then(() =>
      model.Post.create({
        id: null,
        body: body,
        likeCache: 0,
        commentCache: 0,
        postType: 1
        // id_parent: need to implement on event register
      })
    )
    .then(comment => {
      res.status(200).send(comment);
    });
};
