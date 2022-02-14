import React from "react";
import Navbar from "../../components/navbar/Navbar";
import WalletBalance from "../../components/walletbalance/WalletBalance";
import { Select, FormControl, MenuItem, Box, FormHelperText } from "@mui/material";
import FilterAsset from "../../components/filterasset/FilterAsset";

import "../../styles/gridStyles.css";
import './assets.css';

const Assets = () => {
  const [asset, setAsset] = React.useState('');

  const handleChange = (event) => {
    setAsset(event.target.value);
  }

  return (
    <div className="gridContainer">
      <Navbar />
      <div className="assetContainer">
        <div className="assetHeader">
          <h1 className="headerText">Assets</h1>
          <div className="balanceContainer">
            <p className="balanceText">Total assets:</p>
            <WalletBalance />
            <Box sx={{ minWidth: 100 }}>
              <FormControl
                fullWidth
                size="small"
                >
                <Select
                  value={asset}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                  <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                  <MenuItem value={"ETH"}>Ethereum</MenuItem>
                  <MenuItem value={"DOGE"}>Dogecoin</MenuItem>
                </Select>
                <FormHelperText>Select Asset</FormHelperText>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="contentContainer">
          <div className="chartContainer">
            {FilterAsset(asset)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;