import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    // if (user == null){
    return (
        <header>
            <nav style={styles.nav}>
                <div style={styles.logoContainer}>
                    <img
                        src="/path/to/logo.png" 
                        alt="Farmhouse Fare Logo"
                        style={styles.logo}
                    />
                    <h1 style={styles.logoText}>Farmhouse Fare</h1>
                </div>
                <ul style={styles.navLinks}>
                    {/* <li><Link to='/' style={styles.link}>Home</Link></li>
                    <li><Link to='/categories' style={styles.link}>Categories</Link></li>
                    <li><Link to='/sign-up' style={styles.link}>Sign-up</Link></li>
                    <li><Link to='/sell' style={styles.link}>Sell</Link></li>
                    <li><Link to='/buy' style={styles.link}>Buy</Link></li>
                    <li><Link to='/cart' style={styles.link}>Cart</Link></li>
                    <li><Link to = '/inventory' style={styles.link}>inventory</Link></li> */}
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
