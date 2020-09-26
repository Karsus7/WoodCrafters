const router = require("express").Router();
const Post = require("../models/postModel");

// router.post("/", async (req, res) => {
//     const { title, createdAt, tags, html } = req.body;
//     console.log(title, createdAt, tags, html);
// });

// route for posting posts
router.post("/", async (req, res) => {
    const {title, createdAt, tags, html } = req.body;
    console.log(title, createdAt, tags, html);
    // post model
    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    });
    // Save the post model
    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
        console.log(savedPost);
    }
    catch(err) {
        console.error(err);
    }
});
// generic route for getting posts
router.get("/", async (req, res) => {
    const posts = await Post.find();
    // res.send("It's Working");
    res.json(posts);
});
// routes for getting posts by id's
router.get("/:id", async (req, res) => {
    const posts = await Post.findById(req.params.id);
    res.json(posts);
});
module.exports = router;
