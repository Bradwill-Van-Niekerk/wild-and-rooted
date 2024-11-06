import React from 'react';
import './Home.css';
import './Header';



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Farmhouse Fare</h1>
        <p>Your farm-to-table experience starts here!</p>
        <a href="#menu" className="btn">Explore Our Menu</a>
      </div>
    </section>
  );
};


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          At Farmhouse Fare, we serve fresh, locally sourced meals with a focus on
          sustainability and seasonal ingredients. We believe in bringing the best
          farm-to-table dining experience right to your plate. Whether it's a hearty
          breakfast or a cozy dinner, every dish is made with love and the freshest ingredients.
        </p>
      </div>
    </section>
  );
};


const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonial">
          <p>"The food is absolutely amazing! The farm-to-table experience is unbeatable, and the staff is so friendly!"</p>
          <h4>- Kate Johnson</h4>
        </div>
        <div className="testimonial">
          <p>"A wonderful dining experience! The seasonal dishes are always fresh and tasty!"</p>
          <h4>- Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};




//   return (
//     <footer className="footer">
//       <p>&copy; 2024 Farmhouse Fare. All Rights Reserved.</p>
//       <p>Follow us on social media!</p>
//       <div className="social-links">
//         <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
//       </div>
//     </footer>
//   );
// };
const Home = () => {
  return (
      <>
      <Hero />
      <About />
      <Testimonials />
      </> 
  
  )
}


export default Home




