import React, { useState } from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';
import Popup from './Popup';

const Page09 = ({ show }) => {
  const [popup, setPopup] = useState('');
  return (
    <>
      <main id='page08' className='main--container'>
        {popup === 'popup01' && (
          <Popup setPopup={setPopup} graphics='aplikacja_zelu' />
        )}

        {popup === 'popup02' && (
          <Popup setPopup={setPopup} graphics='masaz_dziasel' />
        )}
        <Background />
        <div className='page one'>
          <Logo />
          <div className='box row--20--1'>
            <img
              src={process.env.PUBLIC_URL + '/img/sposoby_aplikacji.svg'}
              alt='headline'
            />
            <div className='box two--cols'>
              <div
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                className='box align'>
                <img
                  onClick={() => setPopup('popup01')}
                  style={{
                    alignSelf: 'center',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  src={process.env.PUBLIC_URL + '/img/aplikacja_zelu.svg'}
                  alt='headline'
                />
              </div>
              <div
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                className='box align'>
                <img
                  onClick={() => setPopup('popup02')}
                  style={{
                    alignSelf: 'center',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  src={process.env.PUBLIC_URL + '/img/masaz_dziasel.svg'}
                  alt='headline'
                />
              </div>
            </div>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page08' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page10' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page09;
