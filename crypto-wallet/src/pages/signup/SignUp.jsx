import React from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import LoginNavbar from "../../components/loginnavbar/LoginNavbar";
import LoginHeader from "../../components/loginheader/LoginHeader";
import getTheme from "../../components/theme/getTheme";

import "./signup.css";

class SignUp extends React.Component {
    render() {
        return(
            <div className="gridContainer">
                <LoginNavbar />
                <div className="signupContainer">
                <LoginHeader headerText={"Sign Up"}/>
                    <div className="signupForm">
                        <span className="formTab">
                            <p className="tabText">First Name:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="firstname"
                                    size="small"
                                    color="primary"
                                    label="First Name"
                                    sx={{
                                        display: "flex",
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                    }}
                                />
                            </ThemeProvider>
                        </span>
                        <span className="formTab">
                            <p className="tabText">Last Name:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="lastname"
                                    size="small"
                                    color="primary"
                                    label="Last Name"
                                    sx={{
                                        display: "flex",
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                    }}
                                />
                            </ThemeProvider>
                        </span>
                        <span className="formTab">
                            <p className="tabText">Email:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="email"
                                    size="small"
                                    color="primary"
                                    label="Email"
                                    sx={{
                                        display: "flex",
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                    }}
                                />
                            </ThemeProvider>
                        </span>
                        <span className="formTab">
                            <p className="tabText">Username:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="username"
                                    size="small"
                                    color="primary"
                                    label="Set Username"
                                    sx={{
                                        display: "flex",
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                    }}
                                />
                            </ThemeProvider>
                        </span>
                        <span className="formTab">
                            <p className="tabText">Set Password:</p>
                            <ThemeProvider theme={getTheme()}>
                                <TextField
                                    id="email"
                                    size="small"
                                    color="primary"
                                    label="Set Password"
                                    sx={{
                                        display: "flex",
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                    }}
                                />
                            </ThemeProvider>
                        </span>
                        <Button 
                            variant="contained"
                            href="/pages/assets"
                            sx={{
                                marginTop: "2em",
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

export default SignUp;