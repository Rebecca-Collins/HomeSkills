import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerMenu.scss';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="burger-menu__icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isOpen && (
          <div className="burger-menu__items">
            {/* Add your menu items here */}
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        )}
      </div>
    );
  };
// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="burger-menu">
//       <FaBars className="menu-icon" onClick={toggleMenu} />
//       {isOpen && (
//         <div className="menu-items">
//           {/* Add your menu items here */}
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           <a href="/services">Services</a>
//           <a href="/contact">Contact</a>
//         </div>
//       )}
//     </div>
//   );
// };

export default BurgerMenu;
