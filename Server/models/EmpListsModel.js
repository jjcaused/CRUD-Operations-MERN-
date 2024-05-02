const mongoose = require("mongoose");

const EmpListsModel = new mongoose.Schema({
  name: String,
  email: String,
  phoneno: String,
  designation: String,
  gender: String,
  course: String,
});

const EmpLModel = mongoose.model("EmpTable", EmpListsModel, "EmpTable");

module.exports = EmpLModel;
