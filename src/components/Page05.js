import React, { useState } from "react";
import niezbedny from "../img/niebedny_element.svg";

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
        <section className="content page05">
          <img src={niezbedny} alt="" className="headline--image" />

          <div className="page05">
            <div className="pudelko--05">
              <div className="obrazek--05"></div>
              <div className="obrazek--05"></div>
            </div>
          </div>
          <div className="obrazek--05-02"></div>
          <p>
            <sup>(2)</sup>Dominiak M, Shuleva S, Silvestros S, Alcoforado G. A
            prospective observational study on perioperative use of
            antibacterial agents in implant surgery [published online as ahead
            of print on March 26, 2020]. Adv Clin Exp Med. 2020;29(3).
            doi:10.17219/acem/115087
          </p>
          <div className="buttons">
            <div onClick={() => show("showPage04")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage06")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page04;
