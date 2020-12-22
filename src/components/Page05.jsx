import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page05 = ({ show }) => {
  return (
    <>
      <main id='page05' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page one'>
          <Logo />
          <div className='box row--25--1--5'>
            <img
              style={{ zIndex: '10' }}
              className='headline'
              src={process.env.PUBLIC_URL + '/img/niebedny_element.svg'}
              alt='headline'
            />
            <div className='box two--rows'>
              <div style={{ zIndex: '0' }} className='box absolute right'>
                <img
                  style={{ zIndex: '-1' }}
                  className='paczka'
                  src={
                    process.env.PUBLIC_URL +
                    '/img/Elugel-polski-pudełko-poziom.jpg'
                  }
                  alt='headline'
                />
              </div>
              <div className='box'>
                <img
                  className='headline'
                  style={{ zIndex: '10' }}
                  src={
                    process.env.PUBLIC_URL + '/img/bezposrednia_aplikacja.svg'
                  }
                  alt='headline'
                />
              </div>
              <div className='box'>
                <img
                  src={process.env.PUBLIC_URL + '/img/miejscowo_dzialajacy.svg'}
                  alt='headline'
                />
              </div>
            </div>
            <p style={{ zIndex: '100' }}>
              <sup>(2)</sup> Dominiak M, Shuleva S, Silvestros S, Alcoforado G.
              A prospective observational study on perioperative use of
              antibacterial agents in implant surgery [published online as ahead
              of print on March 26, 2020]. Adv Clin Exp Med. 2020;29(3).
              doi:10.17219/acem/115087
            </p>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page04' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page06' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page05;
