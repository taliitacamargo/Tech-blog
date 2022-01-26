const router = require('express').Router();
const { Posts, User } = require('../../models');
const withAuth = require('../../utils/auth');


// gets all posts if no projects then status 400.
router.get('/', async (req, res) => {
    try {
        const getPosts = await Posts.findAll();

        if (!getPosts) {
            res.status(400).json(err)
        }
        res.status(200).json(getPosts)
    }
    catch (err) {
        res.status(500).json(err);

    }
});

// creates post.
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Posts.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        console.log(newPost);

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// gets post by id
router.get("/:id", async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id, {
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

// deletes post by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await Posts.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!deletePost) {
            res.status(404).json({ message: `No posts found with this id ${req.params.id}! ` })
            return;
        }
        res.status(200), json(deletePost);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// updates post by id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const newPost = await Post.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!newPost) {
            res.status(404).json({ message: `No posts found with this id ${req.params.id}! ` })
            return;
        }
        res.status(200).json(newPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;