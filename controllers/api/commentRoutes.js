const router = require('express').Router();
const { Comment, User } = require("../../models");



router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();

        if (!commentData) {
            res.status(400).json("No users found");
        }
    }
    catch (err) {
        res.status(400).json(err)
    }
});

router.post("/:id", async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id)
        const commentData = await Comment.create({
            ...req.body,
     
            user_id: req.session.user_id,
            post_id: req.params.id
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err);
        
    }
});

module.exports = router