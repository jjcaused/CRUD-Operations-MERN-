const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const UserModel = mongoose.model("login", UserSchema, "login");

module.exports = UserModel;
