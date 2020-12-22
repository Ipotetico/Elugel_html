import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page11 = ({ show }) => {
  return (
    <>
      <main id='page11' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page one'>
          <Logo />
          <div className='box'>
            <img
              style={{ width: '100%', height: '95%' }}
              className='logo'
              src={process.env.PUBLIC_URL + '/img/last_page@2x-100.jpg'}
              alt='Elugel logo'
            />
          </div>
          <div style={{ height: '8vw' }} className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page10' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page11;
