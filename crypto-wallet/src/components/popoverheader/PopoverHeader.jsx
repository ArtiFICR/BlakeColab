import { Button } from "@mui/material";

import "./popoverheader.css";

const PopoverHeader = ({leftTabText, rightTabText}) => {
    return(
        <>
            <div className="popoverHeader">
                <Button 
                  variant="text"
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