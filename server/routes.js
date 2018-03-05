const express = require('express');
const router = require('express').Router();
const path = require('path');
const postController = require('./db/controllers/post-controller.js');
const userController = require('./db/controllers/user-controller.js');
const subredditController = require('./db/controllers/subreddit-controller.js');

// Post Routers

router.route('/post').post(postController.createPost);
router.route('/post/:id').get(postController.getPost);
router.route('/upvote/:id').put(postController.updatePostWithUpvote);
router.route('/downvote/:id').put(postController.updatePostWithDownvote);
router.route('/search').post(postController.searchPosts);
router.route('/post/:id').delete(postController.deletePost);

router.route('/login').post(userController.findUserAlt);
router.route('/signup').post(userController.createUser);

// New route created below

// router.route('/:subreddit/post').post(controller.createOne);
router.route('/comment/:id').get(postController.getPost);
router.route('/comment/:id').delete(postController.deletePost);
router.route('/comments/:id').get(postController.getAllPosts);
router.route('/posts').get(postController.getAllPosts);

// router.route('/user-history');
// router.route('/comment').post();
// router.route('/logout');
// router.route('/upvote');
// router.route('/downvote');

// Subreddit Routers
router.route('/subreddits').get(subredditController.allSubredditNames);
// COMMENTED THIS ↓↓↓↓↓ SO GET REQ BELOW THIS COULD RUN...IF I BROKE SOMETHING, SOWWY!!!
// router.route('/subreddit').get(subredditController.getSubreddit);
router.route('/subreddit/:name').get(subredditController.getSubredditByName); // by name
router.route('/subreddit').post(subredditController.createSubreddit);

// User Routers
router.route('/user').post(userController.createUser);
router.route('/user/:email').get(userController.getUser);
router.route('/user/addSub/:id/:subreddit').put(userController.addToUserRedditSubscriptions);
router.route('/user/remSub/:id/:subreddit').put(userController.remFromUserRedditSubscriptions);

router.route('*').get((err, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist', 'index.html'));
});

module.exports = router;
