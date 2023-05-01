const router = require('express').Router();
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require('../../controllers/postController.js');


router.route('/').get(getPosts).post(createPost);


router
  .route('/:commentId')
  .get(getSinglePost)
  .put(updatePost)
  .delete(deletePost);

module.exports = router;
