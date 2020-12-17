import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page08 = ({ show }) => {
  return (
    <>
      <main id='page08' className='main--container'>
        <Background />
        <div className='page one'>
          <Logo />
          <div className='box row--20--1'>
            <img
              src={process.env.PUBLIC_URL + '/img/duze_opakowanie.svg'}
              alt='headline'
            />
            <div className='box relative'>
              <img
                className='pulse'
                src={process.env.PUBLIC_URL + '/img/40_ml.svg'}
                alt='headline'
              />
              <div style={{ bottom: 0 }} className='box absolute'>
                <img
                  style={{ position: 'absolute', bottom: 0 }}
                  src={process.env.PUBLIC_URL + '/img/Elugel_paczka_03.gif'}
                  alt='headline'
                />
              </div>
            </div>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page07' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page09' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page08;
