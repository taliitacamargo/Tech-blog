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
        console.log(allPosts);
        res.render("homepage", {
            allPosts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.get('/posts/:id', async (req, res) => {

    try {
        const postData = await Posts.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: [
                        "description",
                    ],
                    include: [
                        {
                            model: User,
                            attributes: [
                                "name"
                            ]
                        }
                    ]
                }
            ],
            attributes: [
                "name", "description"
            ]
        });
        const post = postData.get({ plain: true });
        console.log(` ${post}`)
        res.render('post', {
            post,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});


    //get post by id
    //render post.handlebars file with that post


router.get("/login", async (req, res) => {
    res.render("login");
})

router.get("/signup", async (req, res) => {
    res.render("signup");
})

module.exports = router