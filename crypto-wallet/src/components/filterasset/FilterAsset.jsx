import GetIndexPrice from "../getindexprice/GetIndexPrice";

import "../../pages/assets/assets.css";

export default function FilterAsset(asset) {
  if (asset === "BTC") {
    return(
      <>
        <p className="chartTitle">Bitcoin (BTC):</p>
        <p className="cryptoValue">{GetIndexPrice('BTC')}</p>
      </>
    )
  }
  else if (asset === "ETH") {
    return(
      <>
        <p className="chartTitle">Ethereum (ETH):</p>
        <p className="cryptoValue">{GetIndexPrice('ETH')}</p>
      </>
    )
  }
  else if (asset === "DOGE") {
    return(
      <>
        <p className="chartTitle">Dogecoin (DOGE):</p>
        <p className="cryptoValue">{GetIndexPrice('DOGE')}</p>
      </>
    )
  }
}

