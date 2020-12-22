import React from 'react';
import Background from './Background';
import Icon from './Icon';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page01 = ({ show }) => {
  return (
    <>
      <main id='page01' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page four'>
          <Logo />
          <div className='box one'>
            <h1 style={{ textAlign: 'center', transform: 'translate(35%)' }}>
              SPECJALISTYCZNY ŻEL STOMATOLOGICZNY <br /> Z CHLORHEKSYDYNĄ 0,2%
            </h1>
            <img
              style={{ width: '80%', zIndex: '-5' }}
              src={process.env.PUBLIC_URL + '/img/Elugel_polski.png'}
              alt=''
            />
            <h3 style={{ textTransform: 'none', fontSize: '2vw' }}>
              O specjalnie przystosowanej formule:
            </h3>
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
