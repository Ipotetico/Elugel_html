import React from 'react';

const ListItem = ({ func, text, number, popup }) => (
  <p
    style={{ fontSize: popup === number ? '2vw' : '1.5vw' }}
    onClick={() => func(number)}>
    {text}
  </p>
);

export default ListItem;
