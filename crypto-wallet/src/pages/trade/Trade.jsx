import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import filterAsset from "../../components/filterasset/FilterAsset";
import { TextField, ThemeProvider } from "@mui/material";
import getTheme from "../../components/theme/getTheme";

import "../../styles/gridStyles.css";
import "./trade.css";

const Trade = () => {
  const [asset, setAsset] = React.useState('');

  const handleChange = (event) => {
    setAsset(event.target.value);
  }

  return (
    <div className="gridContainer">
      <Navbar />
      <div className="tradeContainer">
        <Header headerText={"Trade"} />
        <div className="contentContainer"> 
          <div className="searchBar">
            <ThemeProvider theme={getTheme()}>
              <TextField
                id="asset"
                label="Search Assets"
                type="search"
                size="small"
                color="primary"
                onChange={handleChange}
                value={asset}
                InputLabelProps={{
                  style: { color: '#aaaaaa' },
                }}
                InputProps={{
                  borderColor: '#aaaaaa'
                }}
              />
            </ThemeProvider>
          </div>
          <div className="listContainer">
            <ul className="displayCryptoContent">
              {filterAsset(asset)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;