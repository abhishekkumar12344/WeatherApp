import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [unit, setUnit] = useState('metric');

  // const handleHome

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        alert(`Lat: ${latitude}, Lon: ${longitude}`);
      });
    } else {
      alert('Geolocation not supported');
    }
  };

  return (
    <div className="app-container">
      <Header
        onToggleTheme={handleTheme}
        onToggleUnit={handleUnit}
        onUseCurrentLocation={getCurrentLocation}
      />
      <main>
         
          <Weather unit="metric" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
