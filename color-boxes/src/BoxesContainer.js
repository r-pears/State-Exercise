import React, { useState } from 'react';
import Box from './Box';
import './BoxesContainer.css';
import { choice } from './helpers';


/** Container for the single boxes. */

const BoxesContainer = (props) => {
  const [boxes, setBoxes] = useState(
    Array.from({ length: props.numBoxes }, () => choice(props.allColors))
  );

  const handleClick = (event) => {
    let index = Math.floor(Math.random() * props.numBoxes);

    setBoxes(boxes => {
      let boxCopy = [...boxes];
      boxCopy[index] = choice(props.allColors);
      return boxCopy;
    });
  };

  const boxComponents = boxes.map((color, i) =>
    <Box
      key={i}
      color={color}
    />
  );

  return (
    <>
      <div className='BoxesContainer'>
        {boxComponents}
      </div>
      <div style={{ width: '100vw', textAlign: 'center' }}>
        <button className='BoxesContainer-button' onClick={handleClick}>Change a Box</button>
      </div>
    </>
  );
}


/** Default props for BoxesContainer */

BoxesContainer.defaultProps = {
  numBoxes: 16,
  allColors: [
    "Aqua",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "Chocolate",
    "DodgerBlue",
    "Lavender",
    "LawnGreen",
    "Peru",
    "Plum",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
  ]
};

export default BoxesContainer;
