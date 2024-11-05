import React from 'react';

const Navbar = () => {
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
                    <li><a href="#home" style={styles.link}>Home</a></li>
                    <li><a href="#categories" style={styles.link}>Categories</a></li>
                    <li><a href="#sign-up" style={styles.link}>Sign-up</a></li>
                    <li><a href="#sell" style={styles.link}>Sell</a></li>
                    <li><a href="#buy" style={styles.link}>Buy</a></li>
                    <li><a href="#cart" style={styles.link}>Cart</a></li>
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
