const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postsRoutes');
const commentRoutes = require('./commentRoutes');

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
