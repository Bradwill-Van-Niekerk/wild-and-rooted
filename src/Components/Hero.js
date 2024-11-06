import React from 'react';
import './Home.css';
// import logo from './Assets/images/logo.jpeg'; // Adjust path as needed

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src='https://i.postimg.cc/Hn1CX0zZ/healthy-restaurants-cover.jpg' alt="Farmhouse Fare Logo" className="hero-logo" />
        <h1>Welcome to Farmhouse Fare</h1>
        <p>Your farm-to-table experience starts here!</p>
        <a href="#menu" className="btn">Explore Our Menu</a>
      </div>
    </section>
  );
};

export default Hero;
