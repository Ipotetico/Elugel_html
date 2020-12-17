import React from 'react';
import Background from './Background';
import Icon from './Icon';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page01 = ({ show }) => {
  return (
    <>
      <main id='page01' className='main--container'>
        <Background />
        <div className='page one'>
          <Logo />
          <div className='box one'>
            <h1>
              SPECJALISTYCZNY ŻEL STOMATOLOGICZNY <br /> Z 0,2% Chlorheksydyny
            </h1>
            <img
              src={process.env.PUBLIC_URL + '/img/Elugel_paczka_01.gif'}
              alt=''
            />
            <h3>O specjalnie przystosowanej formule:</h3>
          </div>
          <div className='box four'>
            <Icon icon='ikona_01' />
            <Icon icon='ikona_02' />
            <Icon icon='ikona_03' />
            <PageBtn show={show} icon='dalej' page='page02' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page01;
