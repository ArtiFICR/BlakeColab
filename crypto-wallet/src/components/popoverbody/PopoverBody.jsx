import { TextField, ThemeProvider, Button, createTheme } from "@mui/material";

import "./popoverbody.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#86898a",
        },
    }
});

const PopoverBody = ({count, buttonText}) => {
    return(
        <>
            <div className="totalAmount">{count}</div>
            <div className="assetInputContainer">
                <p className="assetInputText">Asset:</p>
                <TextField 
                  width="20px" 
                  size="small"
                  className="totalAmountInput"
                  sx={{
                    width: "10em",
                    marginRight: "0.5em",
                    paddingRight: "1.5em",
                    paddingLeft: "0.5em",
                  }}
                />
            </div>
            <div className="popoverButton">
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  PaperProps={{
                    style: {
                      backgroundColor: 'red',
                    },
                  }}
                >
                  {buttonText}
                </Button>
              </ThemeProvider>
            </div>
        </>
    );
}

export default PopoverBody;