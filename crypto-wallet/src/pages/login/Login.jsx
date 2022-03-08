import React from "react";
import { Button } from "@mui/material";
import LoginNavbar from "../../components/loginnavbar/LoginNavbar";
import LoginHeader from "../../components/loginheader/LoginHeader";

import "../../styles/gridStyles.css";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div className="gridContainer">
                <LoginNavbar />
                <div className="loginContainer">
                    <LoginHeader headerText={"Login"}/>
                    <div className="loginForm">
                        <span className="usernameContainer">Username: <input></input></span>
                        <span className="passwordContainer">Password: <input></input></span>
                        <Button 
                            variant="contained"
                            href="/pages/assets"
                            sx={{
                                backgroundColor: "#86898a",
                                "&:hover": {
                                    backgroundColor: "#9c9c9c"
                                },
                                "&:focus": {
                                    backgroundColor: "#6a6d6e"
                                },
                            }}
                        >
                            Login
                        </Button>
                        <span className="buttonSeperator">- or -</span>
                        <Button 
                            variant="contained"
                            href="/pages/signup"
                            sx={{
                                backgroundColor: "#86898a",
                                "&:hover": {
                                    backgroundColor: "#9c9c9c"
                                },
                                "&:focus": {
                                    backgroundColor: "#6a6d6e"
                                },
                                color: "white",
                            }}
                        >
                            Signup
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;