import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-title">🌦️ WeatherApp</h2>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">About</a>
          <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">
            API Source
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WeatherApp | Designed by Abhishek Raj</p>
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
          <a href="mailto:support@weatherapp.com">📧 Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
