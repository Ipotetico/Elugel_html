import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import Page03 from "./components/Page03";

function App() {
  const [show, setShow] = useState("showPage03");

  const handleShow = (showComponent) => {
    setShow(showComponent);
  };
  return (
    <main className="main--container">
      <Background />
      {show === "showPage01" && <Page01 show={handleShow} />}
      {show === "showPage02" && <Page02 show={handleShow} />}
      {show === "showPage03" && <Page03 show={handleShow} />}
    </main>
  );
}

export default App;
