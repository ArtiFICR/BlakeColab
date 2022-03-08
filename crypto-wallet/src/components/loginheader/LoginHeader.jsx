import React from "react";

import "../../styles/gridStyles.css";

export default function LoginHeader({headerText}) {
    return(
        <div className="headerContainer">
          <h1 className="headerText">{headerText}</h1>
        </div>
    );
}