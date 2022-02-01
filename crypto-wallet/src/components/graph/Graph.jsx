import { Stack } from "@mui/material";

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
      <div className="balanceContainer">displayBalance()</div>
    </Stack>
  );
};

export default Graph;