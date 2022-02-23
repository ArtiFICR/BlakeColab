import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { Box, TextField } from "@mui/material";
import AssetDropdown from "../../components/assetdropdown/AssetDropdown";
import FilterAsset from "../../components/filterasset/FilterAsset";

import "../../styles/gridStyles.css";
import "./pay.css";

const Pay = () => {
  const [asset, setAsset] = React.useState('');

  const handleChange = (event) => {
    let asset = event.target.value;
    setAsset(asset);
  }

  return (
    <div className="gridContainer">
      <Navbar />
      <div className="contactContainer">
        <Header headerText="Pay" />
        <div className="contentContainer">
          <div className="payContainer">
            <Box
              sx={{
                margin: "auto",
                width: "45%", 
                '@media (max-width: 1120px)' : {
                  width: '85%'
                },
                backgroundColor: "#656a6b",
                borderRadius: "5px",
                border: "1px solid #aaaaaa",
                color: "#bfbfbf",
              }}
            >
              <p className="payComponentHeader">Pay</p>
              <div className="amountToSend">{FilterAsset(asset)}</div>
              <div className="payInputContainer">
                <nav className="selectAsset">
                  <p className="selectAssetLabel">Pay with:</p>
                  <AssetDropdown asset={asset} onChange={handleChange} />
                </nav>
                <nav className="walletToPay">
                  <p className="toWalletLabel">To:</p> 
                  <TextField 
                    fullWidth
                    size="small"
                    className="toWalletInput"
                  />
                </nav>
                <nav className="toMessage">
                  <p className="messageLabel">Message: </p>
                  <TextField 
                    fullWidth 
                    size="small"
                    className="messageInput"
                  />
                </nav>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;