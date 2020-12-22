import React from 'react';

const PageBtn = ({ show, icon, page }) => {
  return (
    <div
      style={{
        alignSelf: 'flex-start',
        justifySelf: 'center',
        zIndex: 100,
        cursor: 'pointer',
      }}
      onClick={() => show(page)}
      className='box'>
      <img src={process.env.PUBLIC_URL + `/img/${icon}.svg`} alt='icon' />
    </div>
  );
};

export default PageBtn;
