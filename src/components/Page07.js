import React, { useState } from "react";
import zastosowanie02 from "../img/zastosowanie_02.svg";
import zeby01 from "../img/zeby_str_07_01.jpg";
import zeby02 from "../img/zeby_str_07_02.jpg";
import zeby03 from "../img/zeby_str_07_03.jpg";
import zeby04 from "../img/zeby_str_07_04.jpg";
import zeby05 from "../img/zeby_str_07_05.jpg";

const Page07 = ({ show }) => {
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
        <section className="content page07">
          <img src={zastosowanie02} alt="" className="headline--image" />

          <div className="page07">
            <div className="pudelko-na-fote fotka-07"></div>
            <div id="strzalka" className="pudelko-na-fote"></div>
            <div className="five-pictures">
              <img src={zeby01} alt="" className="picture-page-07" />
              <img src={zeby02} alt="" className="picture-page-07" />
              <img src={zeby03} alt="" className="picture-page-07" />
              <img src={zeby04} alt="" className="picture-page-07" />
              <img src={zeby05} alt="" className="picture-page-07" />
            </div>
          </div>
          <p>
            (2) Dominiak M, Shuleva S, Silvestros S, Alcoforado G. A prospective
            observational study on perioperative use of antibacterial agents in
            implant surgery [published online as ahead of print on March 26,
            2020]. Adv Clin Exp Med. 2020;29(3). doi:10.17219/acem/115087
          </p>
          <div className="buttons">
            <div onClick={() => show("showPage06")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage08")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page07;
