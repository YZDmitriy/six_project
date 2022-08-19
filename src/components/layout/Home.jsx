import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <nav className='header'>
      <div className='nav-wrapper'>
        <Link to='/' className=''>
          Six project
        </Link>
        <ul id='' className=''>
          <li>
            <Link to='/clicker'>Clicker</Link>
          </li>
          <li>
            <Link to='/modal_window'>Modal Window</Link>
          </li>
          <li>
            <Link to='/quiz_game'>Quiz Game</Link>
          </li>
          <li>
            <Link to='/users_card'>Users Card</Link>
          </li>
          <li>
            <Link to='/convertor_cur'>Convertor currency</Link>
          </li>
          <li>
            <a
              href='https://github.com/YZDmitriy'
              target='_blank'
              rel='noreferrer'
            >
              My Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
