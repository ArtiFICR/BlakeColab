import { Button } from "@mui/material";

const PopoverHeader = (leftTabText, rightTabText) => {
    return(
        <>
            <div className="popoverHeader">
                <Button 
                  variant="text"
                  sx={{
                    borderRight: "0px solid #86898a",
                    borderRadius: "0px",
                    color: "black",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
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
                  }}
                >
                  {rightTabText}
                </Button>
            </div>
        </>
    );
}

export default PopoverHeader;