import React from "react";

const Page11 = ({ show }) => {
  return (
    <>
      <div className="page last--page">
        <section className="content page11">
          <div className="last-page-graphics"></div>
          <div className="graphics-page-11">
            <div className="buttons">
              <div onClick={() => show("showPage10")} className="back"></div>
              <div className="logo--PF"></div>

              <div className=""></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page11;
