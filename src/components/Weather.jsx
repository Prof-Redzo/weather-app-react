import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherForCity = async () => {
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Mostar&appid=83cb4a10bb1a07736569a716dd5e7c3b&units=metric"
    );
    console.log(result);

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
      />
      <button className="primary" onClick={() => getWeatherForCity()}>
        Search
      </button>
    </div>
  );
};

export default Weather;
