import React from "react";
import TopBar from "../components/TopBar";
import "./style.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export const AdminDashboad = () => {
  const navigate = useNavigate();
  const handleDashBoardClick = () => {
    navigate("/admindashboard");
  };

  return (
    <div>
      <TopBar />
      <Paper elevation={15}>
        <div className="Dashboard">
          <Button
            onClick={handleDashBoardClick}
            color="secondary"
            sx={{ color: "#fff" }}
          >
            {" "}
            Dashboard
          </Button>
        </div>
      </Paper>
      <Paper elevation={23}>
        <div className="dashpaper">
          <h2>WELCOME TO ADMIN PANEL</h2>
          <h4>Click Any Actions Above Dashboard</h4>
        </div>
      </Paper>
    </div>
  );
};
