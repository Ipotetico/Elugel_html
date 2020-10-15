import React, { useState } from "react";
import aseptyka from "../img/antyseptyka_mozliwa.svg";
import stosowanie from "../img/stosowanie_antybiotykow.svg";
import strzalka from "../img/strzalka.svg";
import nieZaleca from "../img/nie_zaleca_sie.svg";

const Page04 = ({ show }) => {
  const [showPopup, setShowPopup] = useState("");

  return (
    <>
      {showPopup === "first" && (
        <div className="popup">
          <div onClick={() => setShowPopup("")} className="close">
            X
          </div>
          <h1 style={{ color: "#ccd615" }}>
            Stosowanie antybiotyków <br /> jest wciąż powszechne, <br /> mimo
            ograniczania wskazań <br /> w obecnych wytycznych
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
            Nie zaleca się rutynowego <br />
            stosowania profilaktyki antybiotykowej <br /> w zabiegach
            wszczepiania <br /> implantu zębowego u pacjentów
            immunokompetentnych
            <sup>(*)</sup>
          </h1>
        </div>
      )}
      <div className="page page03">
        <section className="content page04">
          <div className="headline">
            <img className="headline--image" src={aseptyka} alt="" />
          </div>
          <div className="page04">
            <img
              onClick={() => setShowPopup("first")}
              src={stosowanie}
              alt=""
            />
            <img id="strzalka" src={strzalka} alt="" />
            <img
              onClick={() => setShowPopup("second")}
              src={nieZaleca}
              alt=""
            />
          </div>
          <p>
            *T. Kaczmarzyk i inni, Rekomendacje Grupy Roboczej Polskiego
            Towarzystwa Stomatologicznego i Narodowego Programu Ochrony
            Antybiotyków w zakresie stosowania antybiotyków w stomatologii.
            Narodowy Instytut Leków, Warszawa 2019
          </p>
          <div className="buttons">
            <div onClick={() => show("showPage03")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage05")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page04;
