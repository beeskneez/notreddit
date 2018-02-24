const express = require('express');
const router = require('express').Router();
const postController = require('./db/controllers/post-controller.js');
const userController = require('./db/controllers/user-controller.js');

const path = require('path');

// Post Routers
// router.route('/all').get(postController.getAllPosts);
// router.route('/all').delete(postController.deleteAllPosts);
// router.route('/post').get(postController.getPost);
router.route('/post').post(postController.createPost);
// router.route('/post').delete(postController.deletePost);

// router.route('/login');
// router.route('/signup');
// router.route('/subreddit');

// New route created below

// router.route('/:subreddit/post').post(controller.createOne);

router.route('/posts').get(postController.getAllPosts);

// router.route('/user-history');
// router.route('/comment').post();
// router.route('/logout');
// router.route('/upvote');
// router.route('/downvote');

router.route('*').get((err, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist', 'index.html'));
});

// User Routers
router.route('/user').post(userController.createUser);

module.exports = router;
