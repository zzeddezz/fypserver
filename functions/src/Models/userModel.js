const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  password: String,
  dateCreated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
