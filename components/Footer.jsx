import React from 'react';
import './Footer.css'; // or use CSS modules if you prefer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E0BAQF7EdmjZIxpOw/company-logo_200_200/company-logo_200_200/0/1687843423414/hydroavia_logo?e=2147483647&v=beta&t=hoCe3pfva8MAQ7qc8ZQleNycBfunf0nqSJF3KtIFPHE"
          alt="HydroAvia Logo"
          className="footer-logo"
        />
        <div className="footer-text">
          <p>© {new Date().getFullYear()} HydroAvia. All rights reserved.</p>
        </div>
        <div className="social-links">
       
        <a href="https://x.com/hydroavia" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.linkedin.com/company/hydroavia/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
       
      </div>
      </div>
    </footer>
  );
};

export default Footer;

  