import React, { useState } from "react";
import strzalka_lamana from "../img/strzalka_lamana.svg";
import zielone_kolko from "../img/zielone_kolko.svg";

const Page10 = ({ show }) => {
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
        <section className="content page10">
          <div className="graphics-page-10">
            <img src={strzalka_lamana} alt="" />
            <div className="points-page-10">
              <h2>Elugel wspomaga przy:</h2>
              <div className="subpoints">
                <h4
                  onClick={() =>
                    showPopup !== "1" ? setShowPopup("1") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "1" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Stomatopatiach protetycznych
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "2" ? setShowPopup("2") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "2" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Zmianach grzybiczych jamy ustnej
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "3" ? setShowPopup("3") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "3" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Po zabiegach chirurgicznych
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "4" ? setShowPopup("4") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "4" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Po założeniu szwów
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "5" ? setShowPopup("5") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "5" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Po zabiegach implantologicznych
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "6" ? setShowPopup("6") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "6" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Po zabiegach periodontologicznych
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "7" ? setShowPopup("7") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "7" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Stomatopatiach protetycznych
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "8" ? setShowPopup("8") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "8" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Zapaleniu przyzębia
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "9" ? setShowPopup("9") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "9" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Zapaleniu dziąseł
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "10" ? setShowPopup("10") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "10" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Uszkodzeniach termicznych i mechanicznych błony śluzowej
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "11" ? setShowPopup("11") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "11" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />
                  Wrażliwych dziąsłach
                </h4>
                <h4
                  onClick={() =>
                    showPopup !== "12" ? setShowPopup("12") : setShowPopup("0")
                  }
                  style={{ fontSize: showPopup === "12" ? "3vw" : "1.5vw" }}
                >
                  <img src={zielone_kolko} alt="" />U pacjentów, którzy nie są w
                  stanie szczotkować zębów (hospitalizowani, obłożnie chorzy)
                </h4>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div onClick={() => show("showPage09")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage11")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page10;
