const router = require('express').Router();
const postController = require('./db/controllers/post-controller.js');

router.route('/all').get(postController.getAll);
router.route('/login');
router.route('/signup');
router.route('/subreddit');
router.route('/post').post(postController.createOne);
//New route created below
router.route('/post').get(postController.getOne);
// router.route('/:subreddit/post').post(controller.createOne);
router.route('/user-history');
router.route('/comment');
router.route('/logout');
router.route('/upvote');
router.route('/downvote');

module.exports = router;