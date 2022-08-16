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
