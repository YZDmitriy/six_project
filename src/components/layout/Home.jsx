import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <nav className='header'>
      <div className='nav-wrapper'>
          <h1>Six project</h1>
        <div className="cardPrj">
        <Link to='/clicker'><div className='clickPrj'><p>Clicker</p></div></Link>
        <Link to='/modal_window'><div className='modalPrj'><p>Modal Window</p></div></Link>
        <Link to='/quiz_game'><div className='gamePrj'><p>Quiz Game</p></div></Link>
        <Link to='/users_card'><div className='cardUserPrj'><p>Users Card</p></div></Link>
        <Link to='/convertor_cur'><div className='convPrj'><p>Convertor currency</p></div></Link>
        <Link to='/photo_album'><div className='photoPrj'><p>Photo Ambum</p></div></Link>
        </div>
      </div>
    </nav>
  );
};
