const mongoose = require("mongoose");

// connection url
const url = "mongodb://localhost:27017/fakebook";
mongoose.connect(url);

// create a new schema

const postSchema = new mongoose.Schema({
  uid: Number,
  postImage: String,
  timestamp: { type: Date, default: Date.now },
  message: String,
});

const Post = mongoose.model("Post", postSchema);

const post = new Post({
  uid: 5,
  postImage: "",
  message: "Hallo Welt, neuer Post ohne Bild",
});

const userSchema = new mongoose.Schema({
  uid: Number,
  registered: { type: Date, default: Date.now },
  fname: String,
  lname: String,
  username: String,
});

const User = mongoose.model("User", userSchema);

const max = new User({
  uid: 5,
  fname: "Max",
  lname: "Mustermann",
  username: "max",
});

// post.save();
// max.save();

Post.find((err, posts) => {
  if (err) console.log(err);
  else console.log(posts);
});
