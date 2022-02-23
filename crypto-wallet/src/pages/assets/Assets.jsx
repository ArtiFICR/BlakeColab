import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import WalletBalance from "../../components/walletbalance/WalletBalance";
//import { Select, FormControl, MenuItem, Box, FormHelperText, ThemeProvider } from "@mui/material";
import filterAsset from "../../components/filterasset/FilterAsset";
//import getTheme from "../../components/theme/getTheme";
import AssetDropdown from "../../components/assetdropdown/AssetDropdown";

import "../../styles/gridStyles.css";
import './assets.css';

const Assets = () => {
  const [asset, setAsset] = React.useState('');

  const handleChange = (event) => {
    let asset = event.target.value;
    setAsset(asset);
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
                <AssetDropdown onChange={handleChange} />
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