import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page06 = ({ show }) => {
  return (
    <>
      <main id='page06' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page one'>
          <Logo />
          <div className='box row--25--1--5'>
            <img
              className='headline'
              src={process.env.PUBLIC_URL + '/img/kompleksowa_opieka.svg'}
              alt='headline'
            />
            <div className='box two--rows'>
              <div style={{ zIndex: '0' }} className='box absolute right'>
                <img
                  className='set'
                  src={process.env.PUBLIC_URL + '/img/Zestaw.png'}
                  alt='headline'
                />
              </div>
              <div className='box'>
                <img
                  className='headline'
                  style={{ width: '65%', zIndex: '10' }}
                  src={
                    process.env.PUBLIC_URL + '/img/stosowanie_antyseptyki.svg'
                  }
                  alt='headline'
                />
              </div>
              <div className='box'>
                <img
                  src={
                    process.env.PUBLIC_URL + '/img/antyseptyka_w_chirurgii.svg'
                  }
                  alt='headline'
                />
              </div>
            </div>
            <p>
              <sup>(2)</sup> Dominiak M, Shuleva S, Silvestros S, Alcoforado G.
              A prospective observational study on perioperative use of
              antibacterial agents in implant surgery [published online as ahead
              of print on March 26, 2020]. Adv Clin Exp Med. 2020;29(3).
              doi:10.17219/acem/115087
            </p>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page05' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page07' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page06;
