import React, { useState } from "react";
import niezbedny from "../img/niebedny_element.svg";
import kompleksowa from "../img/kompleksowa_opieka.svg";

const Page06 = ({ show }) => {
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
        <section className="content page06">
          <img src={kompleksowa} alt="" className="headline--image" />

          <div className="page05">
            <div className="pudelko--06">
              <div className="obrazek--06"></div>
            </div>
          </div>
          <div className="obrazek--06"></div>
          <div className="obrazek--06"></div>
          <p>
            <sup>(2)</sup>T. Kaczmarzyk i inni, Rekomendacje Grupy Roboczej
            Polskiego Towarzystwa Stomatologicznego i Narodowego Programu
            Ochrony Antybiotyków w zakresie stosowania antybiotyków w
            stomatologii. Narodowy Instytut Leków, Warszawa 2019
          </p>
          <div className="buttons">
            <div onClick={() => show("showPage05")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage07")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page06;
