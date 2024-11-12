import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <nav style={styles.nav}>
        <div style={styles.logoContainer}>
          <img
            src="https://i.postimg.cc/XNPj7F9C/logo.jpg" 
            alt="Farmhouse Fare Logo"
            style={styles.logo}
          />
          <h1 style={styles.logoText}>Farmhouse Fare</h1>
        </div>
        <ul style={styles.navLinks}>
          <li><Link to='/' style={styles.link}>Home</Link></li>
          <li 
            style={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/Categories' style={styles.link}>Categories</Link>
            {isDropdownOpen && (
              <ul style={styles.dropdownMenu}>
                <li><Link to='/Categories/Fruits' style={styles.dropdownItem}>Fruits</Link></li>
                <li><Link to='/Categories/Vegs' style={styles.dropdownItem}>Vegetables</Link></li>
                <li><Link to='/Categories/Food' style={styles.dropdownItem}>Food</Link></li>
              </ul>
            )}
          </li>
          <li><Link to='/Buy' style={styles.link}>Buy</Link></li>
          <li><Link to='/Cart' style={styles.link}>Cart</Link></li>
          <li><Link to='/Registration' style={styles.link}>Register</Link></li>
          <li><Link to='/Login' style={styles.link}>Login</Link></li>
          <li><Link to="/Orders" style={styles.link}>Orders</Link></li>
          <li><Link to="/Inventory" style={styles.link}>Inventory</Link></li>  
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px', 
    height: '50px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
  },
  // Dropdown styles
  dropdown: {
    position: 'relative',
    listStyle: 'none',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    listStyle: 'none',
    padding: '10px 0',
    minWidth: '200px',
    zIndex: 10,
    borderRadius: '8px',
    transition: 'opacity 0.3s ease, visibility 0s 0.3s',
  },
  dropdownItem: {
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    fontSize: '1rem',
  },
  dropdownItemHover: {
    backgroundColor: '#f1f1f1',
  },

};

export default Navbar;
