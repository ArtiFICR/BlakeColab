import Navbar from "../../components/navbar/Navbar";
import Graph from "../../components/graph/Graph";

import "../../styles/gridStyles.css";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Portfolio</h1>
          <Graph />
        </div>
        <div className="portfolioList">
          <p className="listHeader">Portfolio Items:</p>
          <ul className="listItems">
            <li>Bitcoin</li>
            <li>Ethereum</li>
            <li>Dogecoin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;