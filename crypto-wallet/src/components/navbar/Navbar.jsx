import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import homeIcon from "../../assets/home.png";
import aboutIcon from "../../assets/about.png";
import portfolioIcon from "../../assets/portfolio.png";
import settingsIcon from "../../assets/settings.png";
import contactIcon from "../../assets/contact.png";
import { Box, Stack } from "@mui/material";

import "./navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: 90,
        maxWidth: "10rem",
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
              <span className="text">Home</span>
              <span className="icon"><img className="iconSettings" src={homeIcon} alt=""/></span>
            </Link>
            <Link to="/pages/about" className="navbar-text">
              <span className="text">About</span>
              <span className="icon"><img className="iconSettings" src={aboutIcon} alt=""/></span>
            </Link>
            <Link to="/pages/portfolio" className="navbar-text">
              <span className="text">Portfolio</span>
              <span className="icon"><img className="iconSettings" src={portfolioIcon} alt=""/></span>
            </Link>
            <Link to="/pages/settings" className="navbar-text">
              <span className="text">Settings</span>
              <span className="icon"><img className="iconSettings" src={settingsIcon} alt=""/></span>
            </Link>
            <Link to="/pages/contact" className="navbar-text">
              <span className="text">Contact</span>
              <span className="icon"><img className="iconSettings" src={contactIcon} alt=""/></span>
            </Link>
          </Stack>
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;