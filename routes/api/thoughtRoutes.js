const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  removeThought,
  addReaction,
  

} = require('../../controllers/thoughtsController');


router.route('/').get(getThought).post(createThought);


router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);


router.route('/:thoughtId/post').post(addThought);

router.route('/:thoughtId/post/:thoughtId').delete(removeThought);
router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;
