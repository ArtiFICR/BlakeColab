import React from "react";
import { Button } from "@mui/material";
import LoginNavbar from "../../components/loginnavbar/LoginNavbar";
import LoginHeader from "../../components/loginheader/LoginHeader";

import "./signup.css";

class SignUp extends React.Component {
    render() {
        return(
            <div className="gridContainer">
                <LoginNavbar />
                <div className="signupContainer">
                <LoginHeader headerText={"Sign Up"}/>
                    <div className="signupForm">
                        <span className="formTab">First Name: <input></input></span>
                        <span className="formTab">Last Name: <input></input></span>
                        <span className="formTab">Email: <input></input></span>
                        <span className="formTab">Username: <input></input></span>
                        <span className="formTab">Password: <input></input></span>
                        <Button 
                            variant="contained"
                            href="/"
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