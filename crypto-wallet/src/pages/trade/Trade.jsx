import Navbar from "../../components/navbar/Navbar";

import "../../styles/gridStyles.css";
import "./trade.css";

function Buy() {
  return <div>Buy!!!</div>
}

function Sell() {
  return <div>Sell!!!</div>
}

function Convert() {
  return <div>Convert!!!</div>
}

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
            <button onClick={Buy()}>Buy</button>
            <button onClick={Sell()}>Sell</button>
            <button onClick={Convert()}>Convert</button>
          </div>
          <div className="listContainer">
            <ul className="cryptoList"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;