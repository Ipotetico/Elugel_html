import React from 'react';

const Background = ({ name }) => {
  return (
    <>
      <div style={{ zIndex: '-5' }} className='background'>
        <img src={process.env.PUBLIC_URL + `/img/${name}`} alt='background' />
        <img
          src={process.env.PUBLIC_URL + '/img/Elugel_logo.svg'}
          alt='Elugel logo'
        />
      </div>
    </>
  );
};

export default Background;
