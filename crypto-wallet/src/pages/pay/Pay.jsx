import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { Box, TextField } from "@mui/material";

import "../../styles/gridStyles.css";
import "./pay.css";

const Pay = () => {
  return (
    <div className="gridContainer">
      <Navbar />
      <div className="contactContainer">
        <Header headerText="Pay" />
        <div className="contentContainer">
          <div className="payContainer">
            <Box
              sx={{
                margin: "auto",
                height: "36rem",
                width: "45rem",
                backgroundColor: "#656a6b",
                borderRadius: "5px",
                border: "1px solid #aaaaaa",
                color: "#bfbfbf",
              }}
            >
              <p className="payComponentHeader">Pay</p>
              <div className="amountToSend">amtToSendInUSD</div>
              <div className="payInputContainer">
                <nav className="selectAsset">
                  <p className="selectAssetLabel">Pay with:</p>
                  <TextField 
                    fullWidth
                    size="small"
                    className="selectAssetInput"
                  />
                </nav>
                <nav className="walletToPay">
                  <p className="toWalletLabel">To:</p> 
                  <TextField 
                    fullWidth
                    size="small"
                    className="toWalletInput"
                  />
                </nav>
                <nav className="toMessage">
                  <p className="messageLabel">Message: </p>
                  <TextField 
                    fullWidth 
                    size="small"
                    className="messageInput"
                  />
                </nav>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;