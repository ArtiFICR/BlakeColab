import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import "../../styles/gridStyles.css";

const Settings = () => {
  return (
    <div className="gridContainer">
      <Navbar />
      <div className="settingsContainer">
        <Header headerText="Settings" />
        <div className="contentContainer"></div>
      </div>
    </div>
  );
};

export default Settings;