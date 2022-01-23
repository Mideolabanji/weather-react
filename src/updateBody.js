import React from "react";
import "./App.css";

export default function setBody(props) {
  return (
    <div className="setBody">
      <h2>{props.response.data.name}</h2>
      <h6>Last updated: Sunday 11:51</h6>
      <h5 className="weather-description">
        {props.response.data.weather[0].description}
      </h5>
      <div className="row">
        <div className="col-6">
          <h1>
            <span className="city-temperature">
              {Math.round(props.response.data.main.temp)}
            </span>
            <span className="degree">°C</span>
          </h1>
        </div>
        <div className="col-6">
          <img
            src={`http://openweathermap.org/img/wn/${props.response.data.weather[0].icon}@2x.png`}
            alt={props.response.data.weather[0].description}
          />
        </div>
      </div>
      <ul>
        <li>Humidity: {props.response.data.main.humidity}%</li>
        <li>Wind: {Math.round(props.response.data.wind.speed)}km/h</li>
      </ul>
    </div>
  );
}
