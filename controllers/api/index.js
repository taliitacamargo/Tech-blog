const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postsRoutes = require('./projectRoutes');

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);
// router.use

module.exports = router;
