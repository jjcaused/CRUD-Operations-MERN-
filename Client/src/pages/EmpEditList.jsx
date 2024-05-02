import React from "react";
import TopBar from "../components/TopBar";
import Paper from "@mui/material/Paper";
import "./style.css";
import TextField from "@mui/material/TextField";
import SelectDesignation from "../components/Select";
import RadioButton from "../components/RadioButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";

export const EmpEditList = () => {
  return (
    <div>
      <TopBar />
      <div className="CreatingEmp">
        <Paper elevation={15}>
          <div className="Headline">
            <h2 class="head">Editing Employee</h2>
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
            <div className="input-content-items">
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
              />
              <SelectDesignation />
              <RadioButton />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="MCA"
              />
              <FormControlLabel control={<Checkbox />} label="BCA" />
              <FormControlLabel control={<Checkbox />} label="BSC" />
              <Button>Make Changes</Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};
