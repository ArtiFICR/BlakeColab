import GetBalance from "../getbalance/GetBalance";

const WalletBalance = () => {
    return(
        <div className="balanceText">
            <p>${GetBalance()}</p>
        </div>
    );
}

export default WalletBalance;