import React from 'react';

import { Button } from "@mui/material";

import handleLogin from '../../database/handleLogin';

const SignIn = () => {
    let isLoggedIn = false;

    return(
        <div>
            Sign In
            <div className="input">
                <input id='emailInput' placeholder='Email'></input>
                <input id='passInput' placeholder='Password'></input>
            </div>
            <Button
                sx={{
                  color: "#c7c7c7",
                  border: "1px solid #929292",
                  borderRadius: "2px",
                  backgroundColor: "#7c7c7c"
                }}
                variant="outlined"
                size="small"
                onClick={handleLogin(document.getElementById('emailInput'), document.getElementById('passInput'), isLoggedIn)}
            >
                Convert
            </Button>
        </div>
    )
}

export default SignIn;