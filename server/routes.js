const router = require('express').Router();
const postController = require('./db/controllers/post-controller.js');

//Post Routers
router.route('/all').get(postController.getAllPosts);
router.route('/all').delete(postController.deleteAllPosts);
router.route('/post').get(postController.getPost);
router.route('/post').post(postController.createPost);
router.route('/post').delete(postController.deletePost);

router.route('/login');
router.route('/signup');
router.route('/subreddit');
//New route created below

// router.route('/:subreddit/post').post(controller.createOne);

router.route('/user-history');
router.route('/comment');
router.route('/logout');
router.route('/upvote');
router.route('/downvote');

module.exports = router;