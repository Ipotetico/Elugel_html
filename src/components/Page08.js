import React from "react";
import duzeOpak from "../img/duze_opakowanie.svg";

const Page08 = ({ show }) => {
  return (
    <>
      <div className="page page03">
        <section className="content page_content_08">
          <img src={duzeOpak} alt="" className="headline--image" />
          <div className="pudelko-na-fote"></div>
          <div className="pudelko-na-fote"></div>

          <div className="buttons">
            <div onClick={() => show("showPage07")} className="back"></div>
            <div></div>
            <div></div>
            <div onClick={() => show("showPage09")} className="dalej"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page08;
