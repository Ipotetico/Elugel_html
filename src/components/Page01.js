import React, { useState } from "react";

const Page01 = ({ show }) => {
  const [showComponent, setShowComponent] = useState("showPage01");

  return (
    <>
      <div className="page">
        <section className="content">
          <div class="headline">
            <h1>
              SPECJALISTYCZNY ŻEL STOMATOLOGICZNY
              <br />Z 0,2% Chlorheksydyna
            </h1>
          </div>
          <img
            className="paczka"
            src={require("../img/Elugel_paczka.gif")}
            alt=""
          />
          <h3>O specjalnie przystosowanej formule:</h3>
        </section>
      </div>
      <div className="footer">
        <div className="icon">
          <img src={require("../img/ikona_01.svg")} alt="" />
        </div>
        <div className="icon">
          <img src={require("../img/ikona_02.svg")} alt="" />
        </div>
        <div className="icon">
          <img src={require("../img/ikona_03.svg")} alt="" />
        </div>
        <div onClick={() => show("showPage02")} className="icon dalej">
          <img src={require("../img/dalej.svg")} alt="" />
        </div>
      </div>
    </>
  );
};

export default Page01;
