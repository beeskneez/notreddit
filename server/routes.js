const express = require('express');
const router = require('express').Router();
const path = require('path');
const postController = require('./db/controllers/post-controller.js');
const userController = require('./db/controllers/user-controller.js');
const subredditController = require('./db/controllers/subreddit-controller.js');

// Post Routers

// router.route('/all').get(postController.getAllPosts);
// router.route('/all').delete(postController.deleteAllPosts);
// router.route('/post').get(postController.getPost);
router.route('/post').post(postController.createPost);
router.route('/post/:id').get(postController.getPost);
router.route('/upvote/:id').put(postController.updatePostWithUpvote);
router.route('/downvote/:id').put(postController.updatePostWithDownvote);

// router.route('/post').delete(postController.deletePost);

router.route('/login').post(userController.findUserAlt);
router.route('/signup').post(userController.createUser);
// router.route('/subreddit');

// New route created below

// router.route('/:subreddit/post').post(controller.createOne);

router.route('/postses').get(postController.getAllPosts);
router.route('/comments/:id').get(postController.getAllPosts);

// router.route('/user-history');
// router.route('/comment').post();
// router.route('/logout');
// router.route('/upvote');
// router.route('/downvote');

// Subreddit Routers
router.route('/subreddits').get(subredditController.allSubredditNames);
router.route('/subreddit').get(subredditController.getSubreddit);
router.route('/subreddit').post(subredditController.createSubreddit);

// User Routers
router.route('/user').post(userController.createUser);

router.route('*').get((err, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist', 'index.html'));
});

module.exports = router;
