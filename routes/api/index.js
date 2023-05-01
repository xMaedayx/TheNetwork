const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const memberRoutes = require('./memberRoutes');

router.use('/comments', commentRoutes);
router.use('/members', memberRoutes);

module.exports = router;
