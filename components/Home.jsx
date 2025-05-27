import React from 'react';
import './Home.css';

function HomePage() {
  return (
    <div className="homepage">
     
      <header className="hero">
        <div className="hero-content">
          <p><u>HydroAvia</u></p>
          <h1>CARBON-FREE</h1>
          <h1>AVIATION</h1>
          
        </div>
      </header>

     
      <div className='text'>
      <h1><b>INNOVATION</b></h1>
      </div>
      <section className="features">
        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwcGY_NIlaUeKHBP-_L5O4SpxXFQ_g5VkAQ&s" alt="Hydrogen Fuel Cell" />
          <h3>Hydrogen Fuel Cell & 10X endurance</h3>
          <p>High energy density of Hydrogen (120 MJ/Kg) with Fuel Cells for Green propulsion & 10X Long duration flight.</p>
        </div>
        <div className="feature">
          <img src="https://www.hydroavia.com/wp-content/uploads/2023/07/forestry-image3.jpg" alt="Autonomous Propulsion" />
          <h3>Autonomous & Quiet Propulsion</h3>
          <p>"Computer Vision & AI" and Cutting edge Aerofoil designs to mitigate noise to make it ready for "nature friendly autonomous" missions.</p>
        </div>
      </section>
      
      <section className='quote'>
      <div className='quo'>
        <p>On a mission to make Aviation</p>
        <h1><b><i>Cleaner (Zero Pollution), Quieter and Efficient</i></b></h1>
        </div>
      </section>
     

   
      <section className="applications">
       <div className='row'>
        <div className='col'>
        <h2>Our Applications</h2>
        <p>We cater to the industries that are planning to take the advantage of long flight duration (20X of current feasible flight time) and our planet friendly (zero-pollution).</p>
        </div>
      <div className='appli'>
        <img src="https://www.hydroavia.com/wp-content/uploads/2023/07/Electrical-lines.jpg" alt='img'></img>
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdRFsUpvQjEEc5kWMKzFMM_gKlT2j3hmH5A&s'></img>
      </div>
      <div className='appli2'>
        <img src="https://www.hydroavia.com/wp-content/uploads/2023/07/Electrical-lines.jpg" alt='img'></img>
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdRFsUpvQjEEc5kWMKzFMM_gKlT2j3hmH5A&s'></img>
      </div>
     
      </div>
      </section>
      <header className="main1">
        <div className="main2">
          <h1>EXPLORE THE WORLD</h1>
          <p>Aviation made human fly without boundaries !! <br />

We are trying to make Vertical-Takeoff-and-Landing (VTOL) & Unmanned Aerial Vehicles (UAV)  fly longer (10X flight duration)  with zero-pollution.</p>
          
        </div>
      </header>

     
      <footer>
        <p>&copy; 2025 HydroAvia</p>
        <p>150 Market Street, Milpitas, CA 95035, USA | Phone: +1 (408) 849-4408 | Email: <a href="mailto:sales@HydroAvia.com">sales@HydroAvia.com</a></p>
      </footer>
    </div>
  );
}

export default HomePage;
