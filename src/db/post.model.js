const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  uid: Number,
  postImage: String,
  timestamp: { type: Date, default: Date.now },
  message: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
