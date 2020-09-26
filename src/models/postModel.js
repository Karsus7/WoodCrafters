const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    createdAt: {type: Date, required: true},
    // tags are an array so posts may be sorted by tags
    tags: { type: [String] },
    // The actual content of the post
    html: { type: String, required: true }
    // the id component will not be displayed
});

module.exports = Post = mongoose.model("post", postSchema)