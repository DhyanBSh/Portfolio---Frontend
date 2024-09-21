import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/Dhyanlogo.svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Add icons for the hamburger menu

const NavBar = ({ sectionsRef }) => {
  const [activeItem, setActiveItem] = useState('Home'); // Default active item
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to handle mobile menu

  const handleMenuClick = (section) => {
    sectionsRef[section].current.scrollIntoView({ behavior: 'smooth' });
    setActiveItem(section); // Update active item
    setMobileMenuOpen(false); // Close the menu after selection on mobile
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' onClick={() => handleMenuClick('Home')} // Direct to Home section when logo is clicked
        className='logo' />

      {/* Hamburger Menu Icon for Mobile */}
      <div className='hamburger' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between close and hamburger icon */}
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {['Home', 'AboutMe', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
          <li
            key={index}
            className={activeItem === item ? 'active' : ''} // Active class for the current section
            onClick={() => handleMenuClick(item)}
            data-cursor="pointer" // Ensure custom cursor works on navigation items
          >
            <p>{item.replace(/([A-Z])/g, ' $1')}</p> {/* Convert camel case to spaced words */}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
