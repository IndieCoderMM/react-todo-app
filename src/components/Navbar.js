import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);
  return (
    <nav className="navBar">
      <button onClick={toggleNav} type="button">
        {navOpen ? (
          <MdClose className="close-icon" />
        ) : (
          <FiMenu className="menu-icon" />
        )}
      </button>
      <ul className={`menuNav ${navOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} onClick={() => closeNav()}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
