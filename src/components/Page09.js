import React, { useState } from "react";
import sposoby_aplikacji from "../img/sposoby_aplikacji.svg";
import aplikacja_zelu from "../img/aplikacja_zelu.svg";
import masaz_dziasel from "../img/masaz_dziasel.svg";

const Page09 = ({ show }) => {
  const [showPopup, setShowPopup] = useState("");

  return (
    <>
      {showPopup === "first" && (
        <div className="popup">
          <div onClick={() => setShowPopup("")} className="close">
            X
          </div>
          <img className="pop_09" src={aplikacja_zelu} alt="" />
        </div>
      )}
      {showPopup === "second" && (
        <div className="popup">
          <div onClick={() => setShowPopup("")} className="close">
            X
          </div>
          <img className="pop_09" src={masaz_dziasel} alt="" />
        </div>
      )}
      <div className="page page03">
        <section className="content content_page09">
          <img src={sposoby_aplikacji} alt="" className="headline--image" />

          <div className="box-for-two">
            <div
              onClick={() => setShowPopup("first")}
              className="box-for-picture"
            ></div>
            <div
              onClick={() => setShowPopup("second")}
              className="box-for-picture"
            ></div>
          </div>

          <div className="buttons">
            <div onClick={() => show("showPage08")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage10")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page09;
