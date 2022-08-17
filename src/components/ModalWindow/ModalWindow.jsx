import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalWindow.scss';

const Modal = ({ open, setOpen }) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className='modal'>
      <svg
        onClick={() => setOpen(false)}
        height='200'
        viewBox='0 0 200 200'
        width='200'
      >
        <title />
        <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
      </svg>
      <img
        src='https://ak.picdn.net/shutterstock/videos/5965511/thumb/1.jpg'
        alt='window'
      />
    </div>
  </div>
);

export const ModalWindow = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  return (
    <div className='main'>
      <div className='modal_window'>
        <button onClick={() => setOpen(true)} className='open-modal-btn'>
          Open Window 🪟
        </button>
        <Modal open={open} setOpen={setOpen} />
      </div>
      <div className='btn'>
        <button onClick={backPage}>come back</button>
      </div>
    </div>
  );
};
