import React from 'react';

const Icon = ({ icon }) => {
  return (
    <div className='box'>
      <img
        className='icon--one'
        src={process.env.PUBLIC_URL + `/img/${icon}.svg`}
        alt='icon'
      />
    </div>
  );
};

export default Icon;
