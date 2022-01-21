const router = require('express').Router();
const { Posts } = require('../models');





router.get("/", async (req, res) => {
    try {
        const postData = await Posts.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const posts = postData.map((post) => post.get({
            plain: true
        }))
        res.render("dashboard", {posts})

    }
    catch (err) {
        res.status(400).json(err)
    }
});


router.get("/edit/:id",async (req,res) => {
    try{
    const editPost = await Posts.findByPk(req.params.id);
    const post = editPost.get({
        plain: true
    })
    console.log(post);
    res.render("post", {post})
}
catch (err) {
    res.status(400).json(err)
}

});



module.exports = router