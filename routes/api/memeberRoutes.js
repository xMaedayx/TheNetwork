const router = require('express').Router();
const {
  getMembers,
  getSingleMember,
  createMember,
  deleteMember,
  addPost,
  removePost,
} = require('../../controllers/memberController');


router.route('/').get(getMembers).post(createMember);


router.route('/:memberId').get(getSingleMember).delete(deleteMember);


router.route('/:memberId/post').post(addPost);

router.route('/:memberId/post/:postId').delete(removePost);

module.exports = router;
