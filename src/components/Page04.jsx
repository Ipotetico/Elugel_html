import React, { useState } from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';
import Popup from './Popup';

const Page04 = ({ show }) => {
  const [popup, setPopup] = useState('');

  return (
    <>
      <main id='page04' className='main--container'>
        {popup === 'popup01' && (
          <Popup
            graphics=''
            setPopup={setPopup}
            grin
            text='Stosowanie antybiotyków jest wciąż powszechne, mimo ograniczenia wskazań w obecnych wytycznych'
          />
        )}

        {popup === 'popup02' && (
          <Popup
            graphics=''
            setPopup={setPopup}
            text={
              <h1>
                Nie zaleca się rutynowego stosowania profilaktyki antybiotykowej
                w zabiegach wszczepiania implantu zębowego <br /> u pacjentów
                immunokompetentnych
                <sup> (*) </sup>
              </h1>
            }
          />
        )}
        <Background />
        <div className='page one'>
          <Logo />
          <div className='box row--25--1--5'>
            <img
              src={process.env.PUBLIC_URL + '/img/antyseptyka_mozliwa.svg'}
              alt='headline'
            />
            <div className='box col--1--15--1'>
              <img
                onClick={() => setPopup('popup01')}
                src={
                  process.env.PUBLIC_URL + '/img/stosowanie_antybiotykow.svg'
                }
                alt='graphics'
              />

              <img
                className='arrow'
                src={process.env.PUBLIC_URL + '/img/strzalka.svg'}
                alt='graphics'
              />

              <img
                onClick={() => setPopup('popup02')}
                src={process.env.PUBLIC_URL + '/img/nie_zaleca_sie.svg'}
                alt='graphics'
              />
            </div>
            <p>
              <sup>(*)</sup> T. Kaczmarzyk i inni, Rekomendacje Grupy Roboczej
              Polskiego Towarzystwa Stomatologicznego i Narodowego Programu
              Ochrony Antybiotyków w zakresie stosowania antybiotyków w
              stomatologii. Narodowy Instytut Leków, Warszawa 2019
              <br />
              <sup>(2)</sup> Dominiak M, Shuleva S, Silvestros S, Alcoforado G.
              A prospective observational study on perioperative use of
              antibacterial agents in implant surgery [published online as ahead
              of print on March 26, 2020]. Adv Clin Exp Med. 2020;29(3).
              doi:10.17219/acem/115087
            </p>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page03' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page05' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page04;
