const router = require('express').Router();
const controller = require('./controller');

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

module.exports = router;