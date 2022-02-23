import React from "react";
import { Popover, Button, createTheme, ThemeProvider } from "@mui/material";

import "./buypopover.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#86898a",
    },
  }
});

const BuyPopover = ({anchorEl, setPopover}) => {
  function handleClose() {
    setPopover(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  
  return(
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      PaperProps={{
        style: { 
          width: '20rem',
          height: '25rem',
          backgroundColor: '#d6d6d6',
        },
      }}
    >
      <p>Buy</p>
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
            Buy
          </Button>
        </ThemeProvider>
      </div>
    </Popover>
  );
}

export default BuyPopover;