import React from 'react';

const Popup = ({ setPopup, text, logo, grin, graphics }) => {
  return (
    <>
      <div onClick={() => setPopup('')} className='box popup'>
        <i className='far fa-times-circle'></i>

        {graphics !== '' && (
          <img
            style={{ width: '100%', height: '100%' }}
            src={process.env.PUBLIC_URL + `/img/${graphics}.svg`}
            alt='grafika'
          />
        )}

        {logo && (
          <img
            src={process.env.PUBLIC_URL + '/img/Elugel_z_koleczkiem.svg'}
            alt='Elugel z koleczkiem'
          />
        )}

        <h1 style={{ color: grin ? '#ccd615' : ' #005ca7' }}>{text}</h1>
      </div>
    </>
  );
};

export default Popup;
