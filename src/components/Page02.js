import React, { useState } from "react";
import molecule from "../video/molecule.mp4";

const Page02 = () => {
  const [showComponent, setShowComponent] = useState("showPage03");
  return (
    <>
      <div className="page page02">
        <section className="content page02">
          <div className="headline">
            <img
              className="headline--image"
              src={require("../img/miejscowa_antyseptyka.svg")}
              alt=""
            />
          </div>
          <div className="presentation">
            <div className="presentation--side">
              <video autoPlay loop>
                <source src={molecule} type="video/mp4" />
              </video>
            </div>
            <div className="tubka--image">
              <img src={require("../img/tubka.jpg")} alt="" />
            </div>
            <div></div>
          </div>
          <h3>O specjalnie przystosowanej formule:</h3>
        </section>
      </div>
    </>
  );
};

export default Page02;
