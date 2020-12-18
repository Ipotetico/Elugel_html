import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page07 = ({ show }) => {
  return (
    <>
      <main id='page07' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page one'>
          <Logo />
          <div className='box row--25--1--5'>
            <img
              className='headline'
              src={process.env.PUBLIC_URL + '/img/zastosowanie_02.svg'}
              alt='headline'
            />
            <div className='box'>
              <div style={{ width: '50%' }} className='box absolute center'>
                <img
                  className='arrow'
                  src={process.env.PUBLIC_URL + '/img/strzalka_zielona.svg'}
                  alt='graphics'
                />
              </div>
              <img
                src={process.env.PUBLIC_URL + '/img/graphic_page_07.svg'}
                alt='graphics'
              />
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
            <PageBtn show={show} icon='back_normal' page='page06' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page08' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page07;
