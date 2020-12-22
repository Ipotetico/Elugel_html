import React, { useState } from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';
import Popup from './Popup';

const Page03 = ({ show }) => {
  const [popup, setPopup] = useState('');

  return (
    <>
      <main id='page03' className='main--container'>
        {popup === 'popup01' && (
          <Popup
            graphics=''
            logo
            setPopup={setPopup}
            text='ZMNIEJSZA NASILENIE OBJAWÓW STOMATOPATII PROTETYCZNEJ'
          />
        )}

        {popup === 'popup02' && (
          <Popup
            graphics=''
            logo
            setPopup={setPopup}
            text={
              <h1 style={{ textAlign: 'center' }}>
                DZIAŁA PRZECIWGRZYBICZO (ZMNIEJSZA KOLONIZACJĘ <br /> GRZYBÓW
                <br />
                <span className='italic'> CANDIDA ALBICANS </span>)
              </h1>
            }
          />
        )}
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page one'>
          <Logo />
          <div className='box row--25--1--5'>
            <img
              className='headline'
              src={process.env.PUBLIC_URL + '/img/klinicznie_potwierdzona.svg'}
              alt='headline'
            />
            <img
              src={process.env.PUBLIC_URL + '/img/wykres_str_03.svg'}
              alt='headline'
            />
            <p>
              <sup>(1)</sup> Miśkiewicz A., Chlorhexidine – an insight into oral
              stomatopathy treatment in the face of increasing drug resistance
              in Candida albicans. MS, 2014, 4 (260), 84-90
            </p>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page02' />
            <h3 onClick={() => setPopup('popup01')} className='green--head'>
              zmniejsza stomatopatię
            </h3>
            <h3 onClick={() => setPopup('popup02')} className='green--head'>
              działa przeciwgrzybiczo
            </h3>
            <PageBtn show={show} icon='dalej_normal' page='page04' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page03;
