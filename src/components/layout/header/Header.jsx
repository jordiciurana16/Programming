import React from 'react';
import styles from './Header.module.css';
import logo from '../../../../public/react.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <img src={logo} alt='Thumbnail' />
          <span>React Frontend Development</span>
        </div>
        <ul>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#help">About</a></li>
          <li><a href="#contact">Help</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
