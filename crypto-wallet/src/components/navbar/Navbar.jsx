import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import assetsIcon from "../../assets/assets.png";
import tradeIcon from "../../assets/trade.png";
import portfolioIcon from "../../assets/portfolio.png";
import settingsIcon from "../../assets/settings.png";
import contactIcon from "../../assets/contact.png";
import signoutIcon from "../../assets/signout.png";
import { Box, Stack } from "@mui/material";

import "./navbar.css";
import "../../styles/gridStyles.css";

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

            <Link to="/pages/assets" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={assetsIcon} alt=""/></span>
              <span className="text">Assets</span>
            </Link>
            <Link to="/pages/trade" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={tradeIcon} alt="$"/></span>
              <span className="text">Trade</span>
            </Link>
            <Link to="/pages/portfolio" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={portfolioIcon} alt=""/></span>
              <span className="text">Portfolio</span>
            </Link>
            <Link to="/pages/pay" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={contactIcon} alt=""/></span>
              <span className="text">Pay</span>
            </Link>
            <Link to="/pages/settings" className="navbar-text">
              <span className="icon"><img className="iconSettings" src={settingsIcon} alt=""/></span>
              <span className="text">Settings</span>
            </Link>
            <div className="logoutTab">
              <Link to="/" className="navbar-text">
                <span className="icon"><img className="iconSettings" src={signoutIcon} alt=""/></span>
                <span className="text">Sign Out</span>
              </Link>
            </div>
          </Stack>
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;