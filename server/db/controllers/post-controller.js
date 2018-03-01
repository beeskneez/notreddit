const db = require('../db.js');
const model = require('../models/post.js');

// Post Controllers
exports.getAllPosts = (req, res) => {
  // find all comments for a post
  if (req.params.id) {
    model.Post.findAll({
      where: {
<<<<<<< HEAD
        user_email: req.query.user,
        postType: 0
      }
=======
        id_parent: req.params.id,
        postType: 1,
      },
>>>>>>> [feat] Add function & route to get comments for a post
    })
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.error(err);
      });

    // find all posts from subreddit
  } else if (req.query.subredditName) {
    model.Post.findAll({
      where: {
        subreddit: req.query.subredditName
      }
    })
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => {
        console.error(err);
      });
  } else {
<<<<<<< HEAD
    // find all posts
    model.Post.findAll({
      where: {
        postType: 0
      }
    }).then(
      posts => {
        res.status(200).send(posts);
      },
      err => {
        console.log(err);
      }
    );
=======
    // find all posts by one user
    if (req.query.user) {
      model.Post.findAll({
        where: {
          user_email: req.query.user,
          postType: 0,
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
      model.Post.findAll({
        where: {
          postType: 0,
        },
      }).then(
        (posts) => {
          res.status(200).send(posts);
        },
        (err) => {
          console.log(err);
        },
      );
    }
>>>>>>> [feat] Add function & route to get comments for a post
  }
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
  const {title, body, image, subreddit, user_email, username, parentId} = req.body.post;

  if (parentId) {
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
          username
          // subreddit,
        })
      )
      .then(post => {
        console.log(post);
        res.status(200).send(post);
      });
  } else {
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
          subreddit
        })
      )
      .then(post => {
        console.log(post);
        res.status(200).send(post);
      });
  }
};

exports.updatePostWithUpvote = (req, res) => {
  console.log(req);
  model.Post.findById(req.params.id)
    .then(post => post.increment('upvoteCache', { by: 1 }))
    .then(post => {
      res.status(200).send(post);
    });
};

exports.updatePostWithDownvote = (req, res) => {
  model.Post.findById(req.params.id)
    .then(post => post.increment('downvoteCache', { by: 1 }))
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
