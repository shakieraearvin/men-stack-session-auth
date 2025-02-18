const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // validation
  },
  password: {
    type: String,
    required: true, // validation to make sure that the password is required 
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
