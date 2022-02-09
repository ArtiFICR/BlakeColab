import Navbar from "../../components/navbar/Navbar";
import HandleTrade from "../../components/handleTrade/HandleTrade";
import { Button } from "@mui/material";

import "../../styles/gridStyles.css";
import "./trade.css";

const Trade = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Trade</h1>
          <div className="searchBar">
            <input 
              type="text"
              id="asset-search"
              placeholder="Searh for cryptos"
              name="crypto-search"
            />
          </div>
          <div className="buttonContainer">
            <Button
              sx={{
                color: "#c7c7c7",
                border: "1px solid #929292",
                borderRadius: "2px",
                backgroundColor: "#7c7c7c",
                marginRight: "0.5rem"
              }}
              variant="outlined"
              size="small"
            >
              Buy
            </Button>
            <Button
              sx={{
                color: "#c7c7c7",
                border: "1px solid #929292",
                borderRadius: "2px",
                backgroundColor: "#7c7c7c",
                marginRight: "0.5rem"
              }}
              variant="outlined"
              size="small"
            >
              Sell
            </Button>
            <Button
              sx={{
                color: "#c7c7c7",
                border: "1px solid #929292",
                borderRadius: "2px",
                backgroundColor: "#7c7c7c"
              }}
              variant="outlined"
              size="small"
            >
              Convert
            </Button>
            {/* 
            <button id="Buy" onClick={GetButtonId(document.getElementById("Buy"))}>Buy</button>
            <button id="Sell" onClick={GetButtonId(document.getElementById("Sell"))}>Sell</button>
            <button id="Convert" onClick={GetButtonId(document.getElementById("Convert"))}>Convert</button>
            */}
            <div className="listContainer">
              <ul className="cryptoList">
                {HandleTrade()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;