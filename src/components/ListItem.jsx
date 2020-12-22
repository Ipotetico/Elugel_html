import React from 'react';

const ListItem = ({ func, text, number, popup }) => (
  <p
    className='list--text'
    style={{ fontSize: popup === number ? '2.5vw' : '1.5vw' }}
    onClick={() => func(number)}>
    {text}
  </p>
);

export default ListItem;
