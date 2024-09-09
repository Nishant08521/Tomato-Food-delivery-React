import React from "react";
import "./AppDownlord.css";
import { assets } from "../../assets/assets";

const AppDowlnlord = () => {
  return (
    <div className="app-downlord" id="app-download">
      <p>
        For Batter Experience Downlord <br /> Tomato app
      </p>
      <div className="app-downlord-paltforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDowlnlord;
