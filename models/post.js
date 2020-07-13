const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 1,
  },
  comments: [{ body: String, date: Date }],
  time: Date,
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
