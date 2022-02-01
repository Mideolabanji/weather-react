import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  let [body, setBody] = useState({});
  let [city, setCity] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();

    function showTemperature(response) {
      setBody({
        cityName = response.data.name,
        description = response.data.weather[0].description,
        temperature = Math.round(response.data.main.temp),
        icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        humidity = response.data.main.humidity,
        wind = Math.round(response.data.wind.speed)
      });
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=872e937052bfbc7cf66f2ac8c3fcaba7&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              onChange={updateCity}
              className="form-control"
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
            />
          </div>
          <div className="col-3 ">
            <input className="btn btn-secondary" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h2>{body.cityName}</h2>
      <h6>Last updated: Sunday 11:51</h6>
      <h5 className="weather-description">{body.description}</h5>
      <div className="row">
        <div className="col-6">
          <h1>
            <span className="city-temperature">
              {body.temperature}
            </span>
            <span className="degree">°C</span>
          </h1>
        </div>
        <div className="col-6">
          <img src={body.icon} alt={body.description} />
        </div>
      </div>
      <ul>
        <li>Humidity: {body.humidity}%</li>
        <li>Wind: {body.wind}km/h</li>
      </ul>
    </div>
  );
}
