const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserModel = require("./models/UserModel");
const app = express();
const EmpLModel = require("./models/EmpListsModel");
const EmployeeDisplayModel = require("./models/EmpListDisplayModel");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jayanth8088:TCZMkGD8d2lzZRt7@cluster0.anszfdd.mongodb.net/Emp_lists?retryWrites=true&w=majority"
);

app.listen(3003, () => {
  console.log("server is up");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  UserModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("password or name is incorrect");
      }
    } else {
      res.json("user does not exist");
    }
  });
});

app.post("/createEmp", (req, res) => {
  EmpLModel.create(req.body)
    .then((EmpTable) => res.json(EmpTable))
    .catch((err) => console.log(err));
});

app.get("/getTable", (req, res) => {
  EmployeeDisplayModel.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

// app.delete("/deleteEmp/:id", async (req, res) => {
//   try {
//     const { name } = req.params;
//     const deletedEmp = await EmployeeDisplayModel.findOneAndDelete({
//       name: name,
//     });
//     if (deletedEmp) {
//       res.json({ message: "Employee deleted successfully", deletedEmp });
//     } else {
//       res.status(404).json({ message: "Employee not found" });
//     }
//   } catch (error) {
//     console.error("Error deleting employee:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
