import Navbar from "../../components/Navbar";

import "../../styles/gridStyles.css";

const Home = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;