import React from "react";
import { Popover, Button, createTheme, ThemeProvider, TextField } from "@mui/material";
//import PopoverHeader from "../popoverheader/PopoverHeader";

import "./buypopover.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#86898a",
    },
  }
});

const BuyPopover = ({anchorEl, setPopover}) => {
  let count = 0;

  function handleClose() {
    setPopover(null);
  }
  /*
  function handleClick() {
    console.log('click');

    count += 1;
  }
  */

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  /*
  let leftTabText  = "Buy";
  let rightTabText = "Receive";
  */
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
            Buy
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
            Receive
          </Button>
        </div>
        {/*
        <PopoverHeader leftTabText={leftTabText} rightTabText={rightTabText} />
        */}
        <div className="amountBought">{count}</div>
        <div className="assetToBuyContainer">
          <p className="assetInputText">Asset:</p>
          <TextField 
            width="20px" 
            size="small"
            className="amountToBuyInput"
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
              Buy
            </Button>
          </ThemeProvider>
        </div>
      </Popover>
    </div>
  );
}

export default BuyPopover;