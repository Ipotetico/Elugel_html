import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import Page03 from "./components/Page03";
import Page04 from "./components/Page04";
import Page05 from "./components/Page05";
import Page06 from "./components/Page06";
import Page07 from "./components/Page07";

function App() {
  const [show, setShow] = useState("showPage07");

  const handleShow = (showComponent) => {
    setShow(showComponent);
  };
  return (
    <main className="main--container">
      <Background />
      {show === "showPage01" && <Page01 show={handleShow} />}
      {show === "showPage02" && <Page02 show={handleShow} />}
      {show === "showPage03" && <Page03 show={handleShow} />}
      {show === "showPage04" && <Page04 show={handleShow} />}
      {show === "showPage05" && <Page05 show={handleShow} />}
      {show === "showPage06" && <Page06 show={handleShow} />}
      {show === "showPage07" && <Page07 show={handleShow} />}
    </main>
  );
}

export default App;
