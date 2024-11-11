import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // if (user == null){
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
                    <li><Link to='/Categories' style={styles.link}>Categories</Link></li>
                    <li><Link to='/Buy' style={styles.link}>Buy</Link></li>
                    <li><Link to='/Cart' style={styles.link}>Cart</Link></li>
                    <li><Link to='/Registration' style={styles.link}>Register</Link></li>
                    <li><Link to='/Login' style={styles.link}>Login</Link></li>
                    <li><Link to='/Login' style={styles.link}>Login</Link></li>
                    <li><Link to ="/Orders" style={styles.link}>Orders</Link></li>
                    <li><Link to ="/Inventory" style={styles.link}>Inventory</Link></li>  
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
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: '50px', 
        height: '50px',
        marginRight: '10px'
    },
    logoText: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        gap: '20px'
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        fontSize: '1rem'
    }
};

export default Navbar;
