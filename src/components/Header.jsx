import React from 'react';
import './Header.css';

function Header({ onToggleTheme, onToggleUnit, onUseCurrentLocation }) {
         const handleLogoClick = () => {
              window.location.reload(); // ✅ reloads the page
           };

  return (
    <header className="header">
      <div className="logo-title">
        

        <h2 className="logo" onClick={handleLogoClick}>🌦️ WeatherApp</h2>
      </div>
      <nav className="nav">
        
      </nav>
      <div className="header-actions">
        <button onClick={onToggleTheme}>☀️ / 🌙</button>
        <button onClick={onToggleUnit}>°C / °F</button>
        <button onClick={onUseCurrentLocation}>📍</button>
      </div>
    </header>
  );
}

export default Header;
