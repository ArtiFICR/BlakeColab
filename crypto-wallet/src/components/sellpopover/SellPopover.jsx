import React from "react";
import { Popover, Typography } from "@mui/material";


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
      >
        <Typography sx={{
          paddingTop: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          height: "100px"
        }}>
          Sell / Send
        </Typography>
      </Popover>
    );
}

export default SellPopover;