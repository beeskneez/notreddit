const router = require('express').Router();
const controller = require('./controller');

router.route('/posts').get(controller.getAll);
router.route('/login');
router.route('/signup');
router.route('/subreddit');
router.route('/:subreddit/post');
router.route('/user-history');
router.route('/comment');
router.route('/logout');
router.route('/upvote');
router.route('/downvote');

module.exports = router;
