import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Paper from "@mui/material/Paper";
import "./style.css";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Radio from "@mui/material/Radio";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const CreateEmp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/createEmp", {
        name,
        email,
        phoneno,
        designation,
        gender,
        course,
      })
      .then((result) => {
        console.log(result);
        setShowAlert(true);
      })
      .catch((error) => console.log(error));
    window.location.reload();
  };

  return (
    <div>
      <TopBar />
      <div className="CreatingEmp">
        <Paper elevation={15}>
          <div className="Headline">
            <h2 class="head">Creating Employee</h2>
          </div>
          <div className="input-content-list">
            <div className="input-content-name">
              <h3>Name:</h3>
              <h3>Email:</h3>
              <h3>Mobile No:</h3>
              <h3>Designation:</h3>
              <h3>Gender:</h3>
              <h3 className="input-content-h3">Course:</h3>
            </div>
            <div>
              <form onSubmit={handeSubmit} className="input-content-items">
                <TextField
                  sx={{
                    bgcolor: "#fff",
                    width: "250px",
                  }}
                  InputProps={{
                    disableUnderline: false,
                  }}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  sx={{
                    bgcolor: "#fff",
                    width: "250px",
                  }}
                  InputProps={{
                    disableUnderline: false,
                  }}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  sx={{
                    bgcolor: "#fff",
                    width: "250px",
                  }}
                  InputProps={{
                    disableUnderline: false,
                  }}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Number"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />

                <Select
                  placeholder="Choose One"
                  sx={{ width: "250px" }}
                  onChange={(event) => {
                    setDesignation(event.target.value);
                  }}
                >
                  <MenuItem value={"HR"}>HR</MenuItem>
                  <MenuItem value={"Manager"}>Manager</MenuItem>
                  <MenuItem value={"Sales"}>Sales</MenuItem>
                </Select>

                <FormGroup onChange={(e) => setGender(e.target.value)}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormGroup>

                <FormGroup onChange={(e) => setCourse(e.target.value)}>
                  <FormControlLabel
                    control={<Checkbox value="MCA" />}
                    label="MCA"
                    value="MCA"
                  />
                  <FormControlLabel
                    control={<Checkbox value="BCA" />}
                    value="BCA"
                    label="BCA"
                  />
                  <FormControlLabel
                    control={<Checkbox value="BSC" />}
                    value="BSC"
                    label="BSC"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  onClick={
                    showAlert && (
                      <Alert variant="filled" severity="success">
                        New Employee created successfully!
                      </Alert>
                    )
                  }
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};
