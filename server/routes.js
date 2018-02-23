const express = require('express');
const router = require('express').Router();
const controller = require('./controller');
const path = require('path');


router.route('/all').get(controller.getAll);
router.route('/login');
router.route('/signup');
router.route('/subreddit');
router.route('/post').post(controller.createOne);
//New route created below
router.route('/post').get(controller.getOne);
// router.route('/:subreddit/post').post(controller.createOne);

router.route('/user-history');
router.route('/comment');
router.route('/logout');
router.route('/upvote');
router.route('/downvote');
router.route('*').get((err, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist', 'index.html'));
});


module.exports = router;

