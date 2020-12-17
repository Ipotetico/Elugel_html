import React, { useState } from 'react';
import './css/App.css';
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import Page03 from './components/Page03';
import Page04 from './components/Page04';
import Page05 from './components/Page05';
import Page06 from './components/Page06';
import Page07 from './components/Page07';
import Page08 from './components/Page08';
import Page09 from './components/Page09';
import Page10 from './components/Page10';
import Page11 from './components/Page11';

function App() {
  const [show, setShow] = useState('page01');

  return (
    <>
      {show === 'page01' && <Page01 show={setShow} />}
      {show === 'page02' && <Page02 show={setShow} />}
      {show === 'page03' && <Page03 show={setShow} />}
      {show === 'page04' && <Page04 show={setShow} />}
      {show === 'page05' && <Page05 show={setShow} />}
      {show === 'page06' && <Page06 show={setShow} />}
      {show === 'page07' && <Page07 show={setShow} />}
      {show === 'page08' && <Page08 show={setShow} />}
      {show === 'page09' && <Page09 show={setShow} />}
      {show === 'page10' && <Page10 show={setShow} />}
      {show === 'page11' && <Page11 show={setShow} />}
    </>
  );
}

export default App;
