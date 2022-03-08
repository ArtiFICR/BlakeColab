import { Button } from "@mui/material";

import "./popoverheader.css";

const PopoverHeader = ({leftTabText, rightTabText, buttonText}) => {
  return(
    <>
      <div className="popoverHeader">
        <Button
          value={leftTabText}
          onClick={() => {
            buttonText = this.state.value;
            console.log(buttonText)

            return buttonText;
          }}
          sx={{
            borderRight: "2px solid #86898a",
            borderRadius: "0px",
            color: "black",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        >
          {leftTabText}
        </Button>
        <Button
          variant="text"
          sx={{
            color: "black",
            display: "flex",
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
          }}
        >
          {rightTabText}
        </Button>
      </div>
    </>
  );
}

export default PopoverHeader;