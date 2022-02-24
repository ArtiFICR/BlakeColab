import React from "react";
import { Popover, Button, createTheme, ThemeProvider, TextField } from "@mui/material";

import "./sellpopover.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#86898a",
    },
  }
});

const SellPopover = ({anchorEl, setPopover}) => {
  let count = 0;
  function handleClose() {
    setPopover(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return(
    <div className="popoverContainer">
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
        <div className="popoverHeader">
          <Button 
            variant="text"
            sx={{
              borderRight: "2px solid #86898a",
              borderRadius: "0px",
              color: "black",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            Sell
          </Button>
          <Button
            variant="text"
            sx={{
              color: "black",
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
              width: "100%",
            }}
          >
            Send
          </Button>
        </div>
        <div className="amountSold">{count}</div>
        <div className="assetToSellContainer">
          <p className="assetInputText">Asset:</p>
          <TextField 
            width="20px" 
            size="small"
            className="amountToSellInput"
            sx={{
              width: "10em",
              marginRight: "0.5em",
              paddingRight: "3em",
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
              Sell
            </Button>
          </ThemeProvider>
        </div>
      </Popover>
    </div>
  );
}

export default SellPopover;