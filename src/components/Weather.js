import React, { useState } from 'react';
import './Weather.css'

const api = {
  key: "687803e655a31e6281ad782acdecae94",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = event => {
    if(event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(weather);
        });
    }
  } 
  
  
  const dateBuilder = (ele) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let day = days[ele.getDay()];
    let date = ele.getDate();
    let month = months[ele.getMonth()];
    let year = ele.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
  
  return (
    <div className="weather-main">
    <div className={
      (typeof weather.main != "undefined")
      ? ((weather.main.temp > 16)
      ? 'weather-main warm'
      : 'weather-main')
      : 'weather-main'
    }>
      <main>
      <div className = "search-box">
        <input
          type = "text"
          className = "search-bar"
          placeholder = "Search..."
          onChange = {e => setQuery(e.target.value)}
          value = {query}
          onKeyPress = {search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className = "date">{dateBuilder(new Date())}</div>
        </div>
      
      <div className = "weather-box">
        <div className = "temp">
          {Math.round(weather.main.temp)}°C
        </div>
        <div className='weather'></div>
      </div>
      </div>
      ) : ('')} 
      </main>
    </div>
    </div>
  );
}

export default Weather;