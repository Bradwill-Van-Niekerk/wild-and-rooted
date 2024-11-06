import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <p>&copy; 2024 Farmhouse Fare. All Rights Reserved.</p>
        <p>Follow us on social media!</p>
        <div className="social-links">
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
        </div>
      </footer>
    );
  };