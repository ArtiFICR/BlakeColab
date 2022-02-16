import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import WalletBalance from "../../components/walletbalance/WalletBalance";
import { Select, FormControl, MenuItem, Box, FormHelperText, ThemeProvider } from "@mui/material";
import filterAsset from "../../components/filterasset/FilterAsset";
import getTheme from "../../components/theme/getTheme";

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
        <Header headerText="Assets" />
        <div className="contentContainer"> 
          <div className="balanceContainer">
            <p className="balanceText">Total assets:</p>
            <WalletBalance />
          </div>
          <div className="listContainer">
            <ul className="displayCryptoContent">
              <div className="dropdownContainer">
                <ThemeProvider theme={getTheme()}>
                  <Box sx={{ minWidth: 100 }}>
                    <FormControl
                      size="small"
                      >
                      <Select
                        value={asset}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        size='small'
                        >
                        <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                        <MenuItem value={"ETH"}>Ethereum</MenuItem>
                        <MenuItem value={"DOGE"}>Dogecoin</MenuItem>
                      </Select>
                      <FormHelperText>Select Asset</FormHelperText>
                    </FormControl>
                  </Box>
                </ThemeProvider>
                <div className="assetList">
                  {filterAsset(asset)}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;