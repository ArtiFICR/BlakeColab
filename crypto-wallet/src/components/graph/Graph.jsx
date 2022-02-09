import { Stack } from "@mui/material";
import WalletBalance from "../walletbalance/WalletBalance";

import "./graph.css";

const Graph = () => {
  return (
    <Stack
      spacing={10}
      justifyContent="top"
      alignContent="top"
      textAlign="center"
      alignItems="center"
    >
      <p className="graphText">Your Portfolio:</p>
      <div className="graphContainer"><WalletBalance /></div>
    </Stack>
  );
};

export default Graph;