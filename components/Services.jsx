import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
     
      <header className="hetero">
        <div className="hetero-content">
        <h1><b>SERVICES</b></h1>
        </div>
      </header>
      <div className='text'>
      <h1><b>Let's make history together</b></h1>
      <p>HydroAvia team is building the cutting-edge drone products & solutions for various industries. So, let’s partner to speed up the innovation, save costs, make more profits… while saving earth & create history !!</p>
      </div>
      <section className="features">
        <div className="feature">
          <img src="https://www.hydroavia.com/wp-content/uploads/2023/07/HydroAvia-Process.jpeg" alt="End-to-End DaaS" />
          <h3>End-to-End DaaS</h3>
          <p>Drone as a Service (DaaS): Drones, Custom software, Hydrogen supply, Service & Operations on the ground - for Enterprises</p>
        </div>
        <div className="feature">
          <img src="https://thumbs.dreamstime.com/b/futuristic-drone-dark-background-304060028.jpg" alt="Autonomous Propulsion" />
          <h3>Drone Retrofit</h3>
          <p>"Computer Vision & AI" and Cutting edge Aerofoil designs to mitigate noise to make it ready for "nature friendly autonomous" missions.</p>
        </div>
      </section>
      <section className='features'>
      <div className="feature">
          <h1><b>Our Moat</b></h1>
          <p><b><i>Our Unique Selling Proposition is a combination of the following Intellectual Property, AI expertise, Aviation know-how…</i></b></p>
          <p>VTOL, Thermal Management,  Swarm drones software</p>
          <p>Custom Software as per Enterprises needs</p>
          <p> Aerodynamics, Intellectual property (Data)</p>
        </div>
          <div className="feature">
          <h1><b>What You Get</b></h1>
          <p><b><i>HydroAvia provides DaaS capabilities customized as per your needs, so you can be rest assured to focus on productivity.</i></b></p>
          <p>H2 FCEV enabled drones</p>
          <p>end-to-end supply partnerships</p>
          <p>Customized solutions as per your needs.</p>
        </div>
      </section>
      <footer>
        <p>&copy; 2025 HydroAvia</p>
        <p>150 Market Street, Milpitas, CA 95035, USA | Phone: +1 (408) 849-4408 | Email: <a href="mailto:sales@HydroAvia.com">sales@HydroAvia.com</a></p>
      </footer>
      
      </div>
      
      );
      }
      export default Services;