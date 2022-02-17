const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: Number,
  registered: { type: Date, default: Date.now },
  fname: String,
  lname: String,
  username: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
