import React from 'react';
import './About.module.css';

function About() {
  return (
    <div className="About">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          
          <h1>WHO WE ARE?</h1>
          
          
        </div>
      </header>
    {/* Features Section */}
   
      <section className="features">
        <div className="feature">
          <h1><b>Our Vision</b></h1>
          <h3>Make aviation Cleaner, Quieter and Efficient !!</h3>
          <p>Mission : using Hydrogen, Fuel Cells, AeroDynamics, and as-per-need Customized Software.</p>
        </div>
        
        <div className="feature">
          <img src="https://www.hydroavia.com/wp-content/uploads/2021/02/outdoor-image-02.jpg" />
         
        </div>
        
      </section>
      <section className='features'>
      <div className="feature">
          <h1><b>Extraordinary Experiences</b></h1>
          <h3>We are group of passionate Technocrats and Aviators !!</h3>
          <p>We are proud to contribute our time for the most challenging and inevitable global warming issue. As per IEA,  In 2022, Aviation  accounted for 2% of global energy-related CO2 emissions.</p>
        </div>
          <div className="feature">
          <h1><b>Our Vision</b></h1>
          <h3>Make aviation Cleaner, Quieter and Efficient !!</h3>
          <p>Mission : using Hydrogen, Fuel Cells, AeroDynamics, and as-per-need Customized Software.</p>
        </div>
      </section>
     

      {/* Footer */}
      <footer>
        <p>&copy; 2025 HydroAvia</p>
        <p>150 Market Street, Milpitas, CA 95035, USA | Phone: +1 (408) 849-4408 | Email: <a href="mailto:sales@HydroAvia.com">sales@HydroAvia.com</a></p>
      </footer>
    </div>
  );
}

export default About;
