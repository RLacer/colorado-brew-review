const router = require('express').Router();
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');


router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;