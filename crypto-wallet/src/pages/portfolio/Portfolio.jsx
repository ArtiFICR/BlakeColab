import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Graph from "../../components/graph/Graph";

import "../../styles/gridStyles.css";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="gridContainer">
      <Navbar />
      <div className="portfolioContainer">
        <Header headerText="Portfolio" />
        <div className="contentContainer">
          <Graph />
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
    </div>
  );
};

export default Portfolio;