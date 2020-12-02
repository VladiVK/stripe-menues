import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenue, closeSubmenue } = useGlobalContext();

  const displaySubmenue = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    // center of the btn
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenue(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenue();
    };
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='nav-logo' src={logo} alt='stripe logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenue}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenue}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenue}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
