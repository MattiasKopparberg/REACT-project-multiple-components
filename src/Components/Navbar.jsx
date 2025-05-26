import React from 'react';
import { useIsOpen } from '../Context/IsOpen';

const Navbar = () => {
  const { isOpen } = useIsOpen();

  return (
    <nav className={isOpen ? 'hidden' : 'active'}>
        <div className="navcontainer">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </div>
    </nav>
  );
};

export default Navbar;