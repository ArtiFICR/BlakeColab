import Navbar from "../../components/navbar/Navbar";

import "../../styles/gridStyles.css";

const Settings = () => {
  return (
    <div className="container">
      <div className="gridContainer">
        <Navbar />
        <div className="contentContainer">
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;