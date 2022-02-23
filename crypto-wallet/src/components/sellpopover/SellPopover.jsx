import React from "react";
import { Popover, Button, createTheme, ThemeProvider } from "@mui/material";

import "./sellpopover.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#86898a",
    },
  }
});

const SellPopover = ({anchorEl, setPopover}) => {
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
        <p>Sell</p>
        <div className="popoverButton">
          <ThemeProvider theme={theme}>
            <Button variant="contained">Sell</Button>
          </ThemeProvider>
        </div>
      </Popover>
    );
}

export default SellPopover;