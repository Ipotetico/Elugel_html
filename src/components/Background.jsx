import React from 'react';

const Background = () => {
  return (
    <>
      <div className='background'>
        <img
          src={process.env.PUBLIC_URL + '/img/czasteczka_tlo_01.png'}
          alt=''
        />
        <img
          src={process.env.PUBLIC_URL + '/img/Elugel_logo.svg'}
          alt='Elugel logo'
        />
      </div>
    </>
  );
};

export default Background;
