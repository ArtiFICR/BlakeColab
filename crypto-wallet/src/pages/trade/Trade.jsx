import Navbar from "../../components/navbar/Navbar";
import HandleTrade from "../../components/handleTrade/HandleTrade";
import { Button, TextField, createTheme, ThemeProvider } from "@mui/material";

import "../../styles/gridStyles.css";
import "./trade.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#aaaaaa',
    },
    secondary: {
      main: "#cccccc",
    },
  },
});

const Trade = () => {
  return (
    <div className="gridContainer">
      <Navbar />
      <div className="tradeContainer">
        <div className="tradeHeader">
          <h1 className="headerText">Trade</h1>
          <div className="buttonContainer">
            <Button
              sx={{
                color: "#c7c7c7",
                border: "1px solid #929292",
                borderRadius: "2px",
                backgroundColor: "#7c7c7c",
                marginRight: "0.5rem"
              }}
              variant="outlined"
              size="small"
            >
              Buy
            </Button>
            <Button
              sx={{
                color: "#c7c7c7",
                border: "1px solid #929292",
                borderRadius: "2px",
                backgroundColor: "#7c7c7c",
                marginRight: "0.5rem"
              }}
              variant="outlined"
              size="small"
            >
              Sell
            </Button>
            <Button
              sx={{
                color: "#c7c7c7",
                border: "1px solid #929292",
                borderRadius: "2px",
                backgroundColor: "#7c7c7c",
              }}
              variant="outlined"
              size="small"
            >
              Convert
            </Button>
          </div>
        </div>
        <div className="contentContainer"> 
          <div className="searchBar">
            <ThemeProvider theme={theme}>
              <TextField
                id="filled-search"
                label="Search Assets"
                type="search"
                size="small"
                color="primary"
                InputLabelProps={{
                  style: { color: '#aaaaaa' },
                }}
                InputProps={{
                  borderColor: '#aaaaaa'
                }}
              />
            </ThemeProvider>
          </div>
          <div className="listContainer">
            <ul className="cryptoList">
              {HandleTrade()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;