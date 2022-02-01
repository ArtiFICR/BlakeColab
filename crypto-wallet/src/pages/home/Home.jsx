import Navbar from "../../components/navbar/Navbar";
import WalletBalance from "../../components/walletbalance/WalletBalance";

import "../../styles/gridStyles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Home</h1>
          <div className="balanceContainer">
            <p>Current balance: $</p>
            <WalletBalance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;