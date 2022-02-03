import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Body from "./Body";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
  }

  function displayWeatherData(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
              />
            </div>
            <div className="col-3 ">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <Body property={weatherData} />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=872e937052bfbc7cf66f2ac8c3fcaba7&units=metric`;
    axios.get(apiUrl).then(displayWeatherData);
    return "Loading...";
  }
}
