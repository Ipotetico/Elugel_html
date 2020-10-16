import React from "react";
import zastosowanie02 from "../img/zastosowanie_02.svg";

const Page07 = ({ show }) => {
  return (
    <>
      <div className="page page03">
        <section className="content page_content_07">
          <img src={zastosowanie02} alt="" className="headline--image" />

          <div className="page07">
            <div className="pudelko-na-fote fotka-07"></div>
            <div id="strzalka_07" className="pudelko-na-fote"></div>
            <div className="five-pictures">
              <div className="in-five-pictures">
                <div className="picture-page-07"></div>
                <div className="picture-page-07"></div>
                <div className="picture-page-07"></div>
              </div>
              <div className="in-five-pictures">
                <div className=""></div>
                <div className="picture-page-07"></div>
                <div className="picture-page-07"></div>
              </div>
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
