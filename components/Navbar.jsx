import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img width={50} height={50}
          src="https://media.licdn.com/dms/image/v2/D4E0BAQF7EdmjZIxpOw/company-logo_200_200/company-logo_200_200/0/1687843423414/hydroavia_logo?e=2147483647&v=beta&t=hoCe3pfva8MAQ7qc8ZQleNycBfunf0nqSJF3KtIFPHE"
          alt="HydroAvia Logo"
          className="footer-logo"
        />
        <a href="/">HydroAvia</a>
                </div>
                
                <nav className={styles.nav}>
                    <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>

                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/Blog">Blog</a></li>
                        <li><a href="/Contact">Contact us</a></li>
                        <li><a href="/SignIn">Sign In</a></li>
                       
                    </ul>
                    <div
                        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
