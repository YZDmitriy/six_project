import React, { useState } from 'react';
import './Clicker.scss';
import { useNavigate } from 'react-router-dom';

export const Clicer = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(-1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className='clicker'>
      <h1>Clicker</h1>
      <h2 className='number'>{count}</h2>
      <div className='grBtn'>
        <button className='minus' onClick={handleMinus}>
          Minus
        </button>
        <button className='plus' onClick={handlePlus}>
          Plus
        </button>
      </div>
      <button className='back' onClick={refreshPage}>
        come back
      </button>
    </div>
  );
};
