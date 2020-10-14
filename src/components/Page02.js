import React, { useState } from "react";

const Page02 = ({ show }) => {
  const [showComponent, setShowComponent] = useState("");
  return (
    <>
      <div className="page page02">
        <section className="content page02">
          <div className="headline">
            <img
              className="headline--image"
              src={require("../img/miejscowa_antyseptyka.svg")}
              alt=""
            />
          </div>
          <div className="presentation">
            <div className="presentation--side">
              <div className="molecule chlorheksydyna "></div>
              <div className="molecule about--chlorex"></div>
            </div>
            <div className="tubka--image">
              <img src={require("../img/tubka.jpg")} alt="" />
            </div>
            <div className="presentation--side">
              <div className="molecule glicerol"></div>
              <div className="molecule about--glicerol"></div>
            </div>
          </div>
          <div className="molecule no--alco">
            <div onClick={() => show("showPage01")} className="back"></div>
          </div>
        </section>
        <div className="presentation--side right">
          <div className="three--pictures">
            <div className="red"></div>
            <div className="green"></div>
            <div className="blue"></div>
          </div>
          <div className="dalej"></div>
        </div>
      </div>
    </>
  );
};

export default Page02;
