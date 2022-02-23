import React from 'react';
import { ThemeProvider, Box, FormControl, Select, MenuItem } from "@mui/material";
import getTheme from "../../components/theme/getTheme";

const AssetDropdown = () => {
    const [asset, setAsset] = React.useState('');

    const handleChange = (event) => {
      let asset = event.target.value;
      setAsset(asset);
    }

    return(
        <>
            <ThemeProvider theme={getTheme()}>
              <Box sx={{ minWidth: 100 }}>
                <FormControl
                  size="medium"
                >
                  <Select
                    value={asset}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    size='small'
                    sx={{
                        minWidth: '7rem'
                    }}
                    >
                    <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                    <MenuItem value={"ETH"}>Ethereum</MenuItem>
                    <MenuItem value={"DOGE"}>Dogecoin</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </ThemeProvider>
        </>
    );
}

export default AssetDropdown;