import { Button } from "@mui/material";
import buyIcon from "../../assets/buy.png";
import sellIcon from "../../assets/sell.png";

import "./buttonbar.css";

const ButtonBar = () => {
    return(
        <div className="buttonContainer">
            <Button
              sx={{
                color: "#dbdbdb",
                border: "1px solid #8a8a8a",
                borderRadius: "50px",
                backgroundColor: "#8a8a8a",
                marginRight: "0.5rem",
                fontSize: "0.7em",
                height: "3.5em",
                width: "12em",
                "@media screen and (max-width: 1120px)": {
                  width: "1em",
                  height: "2.5em"
                },
              }}
              variant="outlined"
            >
              <p className="buttonText">Buy / Receive</p>
              <img className="buttonIcon" src={buyIcon} alt="+"/>
            </Button>
            <Button
              sx={{
                color: "#dbdbdb",
                border: "1px solid #8a8a8a",
                borderRadius: "50px",
                backgroundColor: "#8a8a8a",
                marginRight: "0.5rem",
                fontSize: "0.7em",
                height: "3.5em",
                width: "12em",
                "@media screen and (max-width: 1120px)": {
                  width: "1em",
                  height: "2.5em"
                },
              }}
              variant="outlined"
            >
              <p className="buttonText">Sell / Send</p>
              <img className="buttonIcon" src={sellIcon} alt="-"/>
            </Button>
          </div>
    );
}

export default ButtonBar;