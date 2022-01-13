const router = require('express').Router();
const { Posts, User, Comment } = require('../models');


router.get("/", async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const allPosts = postData.map((post) => post.get({ plain: true }));
        res.render("homepage", {
            allPosts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const projectData = await Porject.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const allPosts = postData.get({ plain: true });

        res.render('one-post', {
            ...allPosts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {
    res.render("login");
})

router.get("/signup", async (req, res) => {
    res.render("signup");
})

module.exports = router