import React, { useReducer } from 'react';
import './ImageSlider.css'; // import CSS file
import img1 from '../assets/1027466.jpg';
import img2 from '../assets/1314151.jpg';
import img3 from '../assets/464254.jpg';
import img4 from '../assets/62651.jpg';

const images = [img1, img2, img3, img4]; 



const initialState = { index: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { index: (state.index + 1) % images.length };
    case 'DECREMENT':
      return { index: (state.index - 1 + images.length) % images.length };
    default:
      return state;
  }
}

const ImageSlider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="slider-container">
      <div className="image-box">
        <img src={images[state.index]} />
      </div>
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Back</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
