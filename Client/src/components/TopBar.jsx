import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  const handleHome = () => navigate("/admindashboard");
  const handleCreateEmp = () => navigate("/createemp");
  const handleEmplist = () => navigate("/emplist");
  const handleLogout = () => navigate("/");

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <h3
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {" "}
              LOGO
            </h3>
            <div className="topbar">
              <Button
                onClick={handleHome}
                sx={{
                  color: "#fff",
                }}
              >
                Home
              </Button>
              <Button
                onClick={handleCreateEmp}
                sx={{
                  color: "#fff",
                }}
              >
                Create Employee
              </Button>
              <Button
                onClick={handleEmplist}
                sx={{
                  color: "#fff",
                }}
              >
                Employee List
              </Button>
              <Button
                onClick={handleLogout}
                sx={{
                  color: "#fff",
                }}
              >
                Logout
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default TopBar;
