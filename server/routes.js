const express = require('express');
const router = require('express').Router();
const path = require('path');
const postController = require('./db/controllers/post-controller.js');
const userController = require('./db/controllers/user-controller.js');
const subredditController = require('./db/controllers/subreddit-controller.js');

// post
router.route('/posts').get(postController.getQueriedPosts);
router.route('/post').post(postController.createPost);
router.route('/post/:id').get(postController.getOnePost);
router.route('/post/:id').put(postController.updateOnePost);
router.route('/post/:id').delete(postController.deletePost);
router.route('/search').post(postController.searchPosts);

router.route('/posts/subreddit').get(postController.getQueriedPosts);
router.route('/posts/user').get(postController.getQueriedPosts);
// auth
router.route('/login').post(userController.findUserAlt);
router.route('/signup').post(userController.createUser);
// comments
router.route('/comment/:id').get(postController.getOnePost);
router.route('/comment/:id').delete(postController.deletePost);
router.route('/comments').get(postController.getQueriedPosts);

// subreddits 
router.route('/subreddits').get(subredditController.allSubredditNames);
router.route('/subreddit/:name').get(subredditController.getSubredditByName);
router.route('/subreddit').post(subredditController.createSubreddit);
// users
router.route('/user').post(userController.createUser);
router.route('/user/:email').get(userController.getUser);
router.route('/user/addSub/:id/:subreddit').put(userController.addToUserRedditSubscriptions);
router.route('/user/remSub/:id/:subreddit').put(userController.remFromUserRedditSubscriptions);

router.route('*').get((err, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist', 'index.html'));
});

module.exports = router;
