import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Loginpage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/login", { name, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/admindashboard");
        } else result.data === "password or name is incorrect";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="Login">Login Page</div>
      <div className="paperalignment">
        <form onSubmit={handeSubmit}>
          <Paper
            elevation={24}
            className="PaperBox"
            sx={{
              bgcolor: "#242424",
              color: "#fff",
            }}
          >
            <h3>Username</h3>
            <TextField
              onChange={(e) => setName(e.target.value)}
              sx={{
                bgcolor: "#fff",
                "& fieldset": { border: "none" },
                width: "250px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
              id="outlined-basic"
              variant="outlined"
              placeholder="admin"
            />
            <h3>Password</h3>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                bgcolor: "#fff",
                width: "250px",
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              id="outlined-basic"
              variant="outlined"
              placeholder="admin123"
            />
            <Button
              type="submit"
              sx={{
                bgcolor: "green",
                display: "flex",
                alignSelf: "center",
                boxSizing: "border-box",
                marginTop: "20px",
              }}
              variant="contained"
            >
              Login
            </Button>
          </Paper>
        </form>
      </div>
    </div>
  );
};
