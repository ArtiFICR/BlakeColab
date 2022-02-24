import React from "react";
import { Popover } from "@mui/material";
import PopoverHeader from "../popoverheader/PopoverHeader";
import PopoverBody from "../popoverbody/PopoverBody";

import "./sellpopover.css";

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
        <PopoverHeader leftTabText="Sell" rightTabText="Send" />
        <PopoverBody count={count} buttonText="Sell" />
      </Popover>
    </div>
  );
}

export default SellPopover;