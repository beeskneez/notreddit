const db = require('../db.js');
const model = require('../models/post.js');

// Post Controllers
exports.getAllPosts = (req, res) => {
  if (req.params.id) {
    model.Post.findAll({
      where: {
        id_parent: req.params.id,
        postType: 1,
      },
    })
      .then((posts) => {
        res.status(200).send(posts);
      })
      .catch((err) => {
        console.error(err);
      });

    //   // find all posts from subreddit
  } else if (req.query.subredditName) {
    model.Post.findAll({
      where: {
        subreddit: req.query.subredditName,
      },
    })
      .then((posts) => {
        res.status(200).send(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  } else if (req.query.user) {
    // find all posts by one user
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
    console.log(req.body);
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
};

exports.getPost = (req, res) => {
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

exports.createPost = (req, res) => {
  const {
    title, body, image, subreddit, user_email, username, parentId, comment,
  } = req.body.post;
  if (parentId) {
    if (comment) {
      model.Post.sync()
        .then(() =>
          model.Post.create({
            id: null,
            body,
            commentCache: 0,
            votes: 0,
            upvoteCache: 0,
            downvoteCache: 0,
            postType: 1,
            // user_id: req.body.user_id,
            id_parent: comment.id,
            user_email,
            username,
            // subreddit,
          }))
        .then((post) => {
          console.log(post);
          res.status(200).send(post);
        });
      // console.log(comment.id);
    } else {
      model.Post.sync()
        .then(() =>
          model.Post.create({
            id: null,
            body,
            commentCache: 0,
            votes: 0,
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
    }
  } else {
    model.Post.sync()
      .then(() =>
        model.Post.create({
          id: null,
          title,
          body,
          likeCache: 0,
          commentCache: 0,
          votes: 0,
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
  }
};

exports.updatePostWithUpvote = (req, res) => {
  console.log(req);
  model.Post.findById(req.params.id)
    .then(post => post.increment('votes', { by: 1 }))
    .then((post) => {
      res.status(200).send(post);
    })
    .catch(err => console.error(err));
};

exports.updatePostWithDownvote = (req, res) => {
  model.Post.findById(req.params.id)
    .then(post => post.decrement('votes', { by: 1 }))
    .then((post) => {
      res.status(200).send(post);
    })
    .catch(err => console.error(err));
};

exports.updateOne = (req, res) => {
  res.status(200).send('update one');
};

exports.deletePost = (req, res) => {
  console.log(req.params);
  model.Post.destroy({
    where: {
      $or: {
        id: {
          $eq: req.params.id,
        },
        id_parent: {
          $eq: req.params.id,
        },
      },
    },
  }).then(() => res.status(200).send('deleted'));
};

exports.deleteAllPosts = (req, res) => {
  model.Post.destroy({
    where: {},
    truncate: true,
  }).then(() => res.send('deleted all posts'));
};

exports.searchPosts = (req, res) => {
  console.log('Searching our DB for: ', req.body.search);
  model.Post.findAll({
    where: {
      title: {
        $like: `%${req.body.search}%`,
      },
    },
  }).then(
    (posts) => {
      res.status(200).send(posts);
    },
    (err) => {
      console.log(err);
    },
  );
};
