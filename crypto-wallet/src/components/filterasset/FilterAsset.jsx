import GetIndexPrice from "../getindexprice/GetIndexPrice";

import "../../pages/home/home.css";

export default function FilterAsset(asset) {
  if (asset === "BTC") {
    return(
      <div className="chartContainer">
        <p className="chartTitle">Bitcoin (BTC):</p>
        <p className="cryptoValue">{GetIndexPrice('BTC')}</p>
      </div>
    )
  }
  else if (asset === "ETH") {
    return(
      <div className="chartContainer">
        <p className="chartTitle">Ethereum (ETH):</p>
        <p className="cryptoValue">{GetIndexPrice('ETH')}</p>
      </div>
    )
  }
  else if (asset === "DOGE") {
    return(
      <div className="chartContainer">
        <p className="chartTitle">Dogecoin (DOGE):</p>
        <p className="cryptoValue">{GetIndexPrice('DOGE')}</p>
      </div>
    )
  }
}

