import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import loginIcon from "../../assets/login.png";
import { Box, Stack } from "@mui/material";

import "../navbar/navbar.css";
import "../../styles/gridStyles.css";

const LoginNavbar = () => {
    return(
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
                            <span className="icon"><img className="iconSettings" src={loginIcon} alt=""/></span>
                            <span className="text">Log In</span>
                        </Link>
                    </Stack>
                </div>
            </nav> 
        </Box>
    );
}

export default LoginNavbar;