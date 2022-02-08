import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import homeIcon from "../../assets/home.png";
import tradeIcon from "../../assets/trade.png";
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
        top: 0,
        left: 0,
        backgroundColor: "#282829",
      }}
    >
      <nav className="navbar">
        <div className="tabContainer">
          <Stack
            direction="column"
            spacing={8}
            justifyContent="center"
            alignItems="center"
          > 
            <div className="logoHeader">
              <img className="navbarLogo" src={logo} alt="Logo" />
              <span className="logoText">Crypto Wallet</span>
            </div>

            <Link to="/" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={homeIcon} alt=""/></span>
              <span className="text">Home</span>
            </Link>
            <Link to="/pages/trade" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={tradeIcon} alt="$"/></span>
              <span className="text">Trade</span>
              {/*<span className="icon"><img className="iconSettings" src={aboutIcon} alt="$"/></span>*/}
            </Link>
            <Link to="/pages/portfolio" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={portfolioIcon} alt=""/></span>
              <span className="text">Portfolio</span>
            </Link>
            <Link to="/pages/settings" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={settingsIcon} alt=""/></span>
              <span className="text">Settings</span>
            </Link>
            <Link to="/pages/contact" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={contactIcon} alt=""/></span>
              <span className="text">Contact</span>
            </Link>
          </Stack>
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;