import Navbar from "../../components/navbar/Navbar";
import WalletBalance from "../../components/walletbalance/WalletBalance";
import GetIndexPrice from "../../components/getindexprice/GetIndexPrice";
import { Stack, Select, FormControl, MenuItem, Box, InputLabel } from "@mui/material";

import "../../styles/gridStyles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
          <div className="contentContainer">
            <h1>Home</h1>
            <span className="balanceContainer">
              <p>Total assets: $</p>
              <WalletBalance />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
                  <Select
                    labelId="crypto-select-label"
                    id="crypto-select"
                    label="Cryptos"
                  >
                    <MenuItem value={10}>Bitcoin</MenuItem>
                    <MenuItem value={20}>Ethereum</MenuItem>
                    <MenuItem value={30}>Dogecoin</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </span>
            <div className="indexContainer">
            <Stack
              spacing={20}
            >
              <div className="chartContainer">
                Bitcoin (BTC):
                <GetIndexPrice />
              </div>
              <div className="chartContainer">
                Ethereum (ETH):
                <GetIndexPrice />
              </div>
              <div className="chartContainer">
                Dogecoin (DOGE):
                <GetIndexPrice />
              </div>
            </Stack>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;