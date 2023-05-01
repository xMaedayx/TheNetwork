const router = require('express').Router();
const {
  getComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment,
} = require('../../controllers/commentController.js');


router.route('/').get(getComments).post(createComment);


router
  .route('/:courseId')
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;
