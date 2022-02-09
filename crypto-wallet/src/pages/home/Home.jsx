import React from "react";
import Navbar from "../../components/navbar/Navbar";
import WalletBalance from "../../components/walletbalance/WalletBalance";
import { Select, FormControl, MenuItem, Box, FormHelperText } from "@mui/material";
import FilterAsset from "../../components/filterasset/FilterAsset";

import "../../styles/gridStyles.css";
import './home.css';

const Home = () => {
  const [asset, setAsset] = React.useState('');

  const handleChange = (event) => {
    setAsset(event.target.value);
  }

  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
          <div className="contentContainer">
            <h1>Home</h1>
            <span className="balanceContainer">
              <p className="balanceText">Total assets:</p>
              <WalletBalance />
              <span className="dropdownContainer">
                <Box sx={{ minWidth: 100 }}>
                  <FormControl fullWidth>
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
              </span>
            </span>
            <div className="indexContainer">
              <div className="chartContainer">
                {FilterAsset(asset)}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;