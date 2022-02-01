import Navbar from "../../components/navbar/Navbar";
import WalletBalance from "../../components/walletbalance/WalletBalance";
import GetIndexPrice from "../../components/walletbalance/GetIndexPrice";

import "../../styles/gridStyles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Home</h1>
          <span className="balanceContainer">
            <p>Current balance: $</p>
            <WalletBalance />
          </span>
          <div className="indexContainer">
            <div className="chartContainer">
              Bitcoin (BTC):
              <GetIndexPrice />
            </div>
            <div className="chartContainer">
              Ethereum (ETH):
              <GetIndexPrice />
            </div>
            <div className="chartContainer">
              Doge (DOGE):
              <GetIndexPrice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;