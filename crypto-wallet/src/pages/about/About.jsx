import Navbar from "../../components/navbar/Navbar";

import "../../styles/gridStyles.css";

const About = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
};

export default About;