import React from 'react';

const Logo = () => {
  return (
    <div className='box to--left'>
      <img
        className='logo'
        src={process.env.PUBLIC_URL + '/img/Elugel_logo.svg'}
        alt='Elugel logo'
      />
    </div>
  );
};

export default Logo;
