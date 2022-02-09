import GetBalance from "../getbalance/GetBalance";

import './walletbalance.css';

const WalletBalance = () => {
    return(
        <div className="balanceText">
            <p>${GetBalance()}</p>
        </div>
    );
}

export default WalletBalance;