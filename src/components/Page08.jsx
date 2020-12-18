import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page08 = ({ show }) => {
  return (
    <>
      <main id='page08' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page one'>
          <Logo />
          <div className='box row--20--1'>
            <img
              className='headline'
              src={process.env.PUBLIC_URL + '/img/duze_opakowanie.svg'}
              alt='headline'
            />
            <div className='box relative'>
              <img
                className='pulse'
                src={process.env.PUBLIC_URL + '/img/40_ml.svg'}
                alt='40 ml'
              />
              <div style={{ bottom: 0 }} className='box absolute'>
                <img
                  className='paczka'
                  style={{
                    zIndex: '-1',
                    transform: 'translate(0%, 20%) scale(0.7)',
                  }}
                  src={
                    process.env.PUBLIC_URL +
                    '/img/Elugel-polski-pudełko-poziom.png'
                  }
                  alt='paczka'
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
