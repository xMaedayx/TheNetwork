const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend, 
  removeFriend,

} = require('../../controllers/userController.js');


router.route('/').get(getUser).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);







module.exports = router;
