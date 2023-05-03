const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  //updateUser,
  deleteUser,

} = require('../../controllers/userController.js');


router.route('/').get(getUser).post(createUser);
router.route('/').get(getSingleUser).delete(deleteUser);



router
  .route('/:userId')
  .get(getSingleUser)
  //.put(updateUser)
  .delete(deleteUser);

module.exports = router;
