import Navbar from "../../components/navbar/Navbar";

import "../../styles/gridStyles.css";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Portfolio</h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;