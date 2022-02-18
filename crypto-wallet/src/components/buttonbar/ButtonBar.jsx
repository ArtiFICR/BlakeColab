import React from "react";
import { Button } from "@mui/material";
import buyIcon from "../../assets/buy.png";
import sellIcon from "../../assets/sell.png";
import BuyPopover from "../buyPopover/BuyPopover";
import SellPopover from "../sellpopover/SellPopover";

import "./buttonbar.css";

const ButtonBar = () => {
  const [buyPopover, setBuyPopover] = React.useState({
    anchorEl: null,
    child: <BuyPopover />
  });

  const [sellPopover, setSellPopover] = React.useState({
    anchorEl: null,
    child: <SellPopover />
  });
  
  const handleBuyClick = (event) => {
    setBuyPopover(event.currentTarget);
  }

  const handleSellClick = (event) => {
    setSellPopover(event.currentTarget);
  }
  /*
  function handleClose() {
    setAnchorEl(null);
  }
  */

  return(
    <div className="buttonContainer">
      <Button
        sx={{
          color: "#dbdbdb",
          border: "1px solid #8a8a8a",
          borderRadius: "50px",
          backgroundColor: "#8a8a8a",
          marginRight: "0.5rem",
          fontSize: "0.7em",
          height: "3.5em",
          width: "12em",
          "@media screen and (max-width: 1120px)": {
            width: "1em",
            height: "2.5em"
          },
        }}
        variant="outlined"
        onClick={handleBuyClick}
      >
        <p className="buttonText">Buy / Receive</p>
        <img className="buttonIcon" src={buyIcon} alt="+"/>
      </Button>
        <BuyPopover anchorEl={buyPopover} setPopover={setBuyPopover} />
      <Button
        sx={{
          color: "#dbdbdb",
          border: "1px solid #8a8a8a",
          borderRadius: "50px",
          backgroundColor: "#8a8a8a",
          marginRight: "0.5rem",
          fontSize: "0.7em",
          height: "3.5em",
          width: "12em",
          "@media screen and (max-width: 1120px)": {
            width: "1em",
            height: "2.5em"
          },
        }}
        variant="outlined"
        onClick={handleSellClick}
      >
        <p className="buttonText">Sell / Send</p>
        <img className="buttonIcon" src={sellIcon} alt="-"/>
      </Button>
      <SellPopover anchorEl={sellPopover} setPopover={setSellPopover} />
    </div>
  );
}

export default ButtonBar;