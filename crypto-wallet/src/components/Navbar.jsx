import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Box, Stack } from "@mui/material";

import "./navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: 120,
        top: 0,
        left: 0,
        backgroundColor: "#282829",
      }}
    >
      <nav className="navbar">
        <div className="tabContainer">
          <Stack
            direction="column"
            spacing={10}
            justifyContent="center"
            alignItems="center"
          >
            <img className="navbarLogo" src={logo} alt="Logo" />
            <Link to="/" className="navbar-text">
              Home
            </Link>
            <Link to="/pages/about" className="navbar-text">
              About
            </Link>
            <Link to="/pages/portfolio" className="navbar-text">
              Portfolio
            </Link>
            <Link to="/pages/services" className="navbar-text">
              Services
            </Link>
            <Link to="/pages/contact" className="navbar-text">
              Contact
            </Link>
          </Stack>
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;