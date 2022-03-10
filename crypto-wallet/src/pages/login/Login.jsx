import React from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import LoginNavbar from "../../components/loginnavbar/LoginNavbar";
import LoginHeader from "../../components/loginheader/LoginHeader";
import getTheme from "../../components/theme/getTheme";

import "../../styles/gridStyles.css";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            isLoggedIn: false
        }
    }

    render() {
        return(
            <div className="gridContainer">
                <LoginNavbar />
                <div className="loginContainer">
                    <LoginHeader headerText={"Login"}/>
                    <div className="loginForm">
                        <div className="usernameContainer">
                            <p className="usernameTab">Username:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="username"
                                    value={this.state.user}
                                    size="small"
                                    color="primary"
                                    label="Username or Email"
                                    sx={{
                                        display: "flex",
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                    }}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="passwordContainer">
                            <p className="passwordTab">Password:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="password"
                                    value={this.state.password}
                                    size="small"
                                    color="primary"
                                    label="Password"
                                />
                            </ThemeProvider>
                        </div>
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
                                marginTop: "2em",
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