const router = require('express').Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", async, (req, res) => {
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

router.post("/", async, (req, res) => {
    try {
        const commentData = await Comment.create({...req.body,
        user_id : req.sessions.user_id,});

    }

})

// router.get ("/", async, (req, res) => {

// })