import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "./happy.svg";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={face} alt="logo" />
          FaceRec App
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
