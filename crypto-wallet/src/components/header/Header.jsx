import React from "react";
import ButtonBar from "../buttonbar/ButtonBar";

import "../../styles/gridStyles.css";

export default function Header({headerText}) {
    return(
        <div className="headerContainer">
          <h1 className="headerText">{headerText}</h1>
          <ButtonBar />
        </div>
    );
}