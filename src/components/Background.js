import React from "react";
import Elugel_logo from "../img/Elugel_logo.svg";

const Background = () => {
  return (
    <>
      <img
        className="tlo"
        src={require("../img/czasteczka_tlo_01.png")}
        alt=""
      />
      <img src={Elugel_logo} alt="" className="logo" />
    </>
  );
};

export default Background;
