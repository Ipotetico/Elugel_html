import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";

function App() {
  const [show, setShow] = useState("showPage01");

  const handleShow = (showComponent) => {
    setShow(showComponent);
  };
  return (
    <main className="main--container">
      <Background />
      {show === "showPage01" && <Page01 show={handleShow} />}
      {/* <Page01 show={handleShow} /> */}
      {show === "showPage02" && <Page02 show={handleShow} />}
    </main>
  );
}

export default App;
