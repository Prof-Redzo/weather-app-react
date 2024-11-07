import { useState } from "react";
import axios from "axios";

import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherForCity = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    );

    //if (result && result.data && result.data.name) == if(result?.data?.name)
    if (result?.data) {
      setWeatherData(result.data);
    }
  };

  return (
    <div>
      <h2>Weather in</h2>
      <input
        className="city-input"
        placeholder="Search city"
        value={city}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (/^\d$/.test(e.key)) {
            e.preventDefault();
        }
        }}
      />
      <button className="primary search-button" disabled={!city} onClick={() => getWeatherForCity()}>
        Search
      </button>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default Weather;