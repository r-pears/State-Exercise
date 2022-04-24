import React from 'react';
import './Box.css';


/** An individual colored box. */

const Box = (props) => {
  return (
    <div
      className='Box'
      style={{ backgroundColor: props.color }}
    />
  );
}

export default Box;
