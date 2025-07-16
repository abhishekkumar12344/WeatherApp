import React, { useState } from 'react';
import './Weather.css';

function Weather({ unit }) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [bgImage, setBgImage] = useState('default.jpg');

  const API_KEY = 'e3145350b01d9ab4424ba03dd169ee28'; // Replace with your OpenWeatherMap key

  const getBackgroundImage = (main) => {
    switch (main.toLowerCase()) {
      case 'clear': return 'clear.jpg';
      case 'clouds': return 'clouds.jpg';
      case 'rain': return 'rain.jpg';
      case 'snow': return 'snow.jpg';
      case 'thunderstorm': return 'storm.jpg';
      default: return 'default.jpg';
    }
  };

  const getWeather = async () => {
    if (!city) return;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`);
    const data = await res.json();
    if (data.cod === 200) {
      setWeather(data);
      setBgImage(getBackgroundImage(data.weather[0].main));
      getForecast(city);
    } else {
      alert('City not found!');
    }
  };

  const getForecast = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`);
    const data = await res.json();
    const daily = data.list.filter(i => i.dt_txt.includes("12:00:00"));
    setForecast(daily);
  };

  return (
    <div className="weather-section" style={{
      backgroundImage: `url('/${bgImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="weather-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>

        {weather && (
          <div className="result">
            <h2>{weather.name}</h2>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>{weather.weather[0].description}</p>
            <h3>{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</h3>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        )}

        {forecast.length > 0 && (
          <div className="forecast">
            {forecast.map((f, i) => (
              <div key={i} className="forecast-card">
                <p>{new Date(f.dt_txt).toLocaleDateString()}</p>
                <img src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} />
                <p>{f.main.temp}°</p>
                <p>{f.weather[0].main}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
