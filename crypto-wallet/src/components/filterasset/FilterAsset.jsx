//import GetAssetAmount from "../getassetamount/GetAssetAmount";

import "../../pages/assets/assets.css";

export default function FilterAsset(asset) {
  let cryptoValue = 'DisplayAssetAmount(' + asset + ')';

  return(
    <>
      <p className="cryptoValue">{cryptoValue}</p>
    </>
  );
}

