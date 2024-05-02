const mongoose = require("mongoose");

const EmpListDisplayModel = new mongoose.Schema({
  name: String,
  email: String,
  phoneno: String,
  designation: String,
  gender: String,
  course: String,
});

const EmployeeDisplayModel = mongoose.model(
  "EmpListDisplay",
  EmpListDisplayModel,
  "EmpTable"
);

module.exports = EmployeeDisplayModel;
