import React from 'react';
import Contact from './Contact';


export default function Footer({ onContactClick }) {    
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} CHAAP. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="#" className="footer-nav-item" onClick={onContactClick}>Contact Us</a>
                </nav>
            </div>
        </footer>
  );
}