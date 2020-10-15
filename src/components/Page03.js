import React, { useState } from "react";
import klinicznie_potwierdzona from "../img/klinicznie_potwierdzona.svg";
import wykres03 from "../img/wykres_str_03.svg";

const Page03 = ({ show }) => {
  const [showPopup, setShowPopup] = useState("");

  return (
    <>
      {showPopup === "first" && (
        <div className="popup">
          <div onClick={() => setShowPopup("")} className="close">
            X
          </div>
          <h1>
            ZMNIEJSZA NASILENIE <br /> OBJAWÓW STOMATOPATII PROTETYCZNEJ
            <sup>(1)</sup>
          </h1>
        </div>
      )}
      {showPopup === "second" && (
        <div className="popup">
          <div onClick={() => setShowPopup("")} className="close">
            X
          </div>
          <h1>
            ZMNIEJSZA KOLONIZACJE
            <br /> GRZYBÓW CANDIDA ALBICANS
            <sup>(1)</sup>
          </h1>
        </div>
      )}
      <div className="page page03">
        <section className="content page03">
          <img
            className="headline--image"
            src={klinicznie_potwierdzona}
            alt=""
          />

          <div className="tubka--image">
            <img src={wykres03} alt="" />
          </div>
          <p>
            Miśkiewicz A., Chlorhexidine – an insight into oral stomatopathy
            treatment in the face of increasing drug resistance in MS, 2014, 4
            (260), 84-90
          </p>
          <div className="buttons">
            <div onClick={() => show("showPage02")} className="back"></div>
            <button onClick={() => setShowPopup("first")} className="button">
              stomatopatia protetyczna
            </button>
            <button onClick={() => setShowPopup("second")} className="button">
              działa przeciwgrzybiczo
            </button>
            <div onClick={() => show("showPage04")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page03;
