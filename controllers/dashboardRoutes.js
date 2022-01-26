const router = require('express').Router();
const { Posts } = require('../models');
const withAuth = require('../utils/auth');





router.get("/", withAuth, async (req, res) => {
    try {
        const postData = await Posts.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const posts = postData.map((post) => post.get({
            plain: true
        }))
        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in
        })

    }
    catch (err) {
        res.status(400).json(err)
    }
});


router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const editPost = await Posts.findByPk(req.params.id);
        const post = editPost.get({
            plain: true
        })
        console.log(post);
        res.render("post", {
            post,
            logged_in: req.session.logged_in
        })
    }
    catch (err) {
        res.status(400).json(err)
    }

});



module.exports = router