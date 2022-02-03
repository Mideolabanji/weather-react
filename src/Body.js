import React from "react";

export default function Body(props) {
  return (
    <div className="Body">
      <h2>{props.property.cityName}</h2>
      <h6>Last updated: Sunday 11:52</h6>
      <h5 className="weather-description">{props.property.description}</h5>
      <div className="row">
        <div className="col-6">
          <h1>
            <span className="city-temperature">
              {Math.round(props.property.temperature)}
            </span>
            <span className="degree">°C</span>
          </h1>
        </div>
        <div className="col-6">
          <img src={props.property.icon} alt={props.property.description} />
        </div>
      </div>
      <ul>
        <li>Humidity: {props.property.humidity}%</li>
        <li>Wind: {props.property.wind}Km/h</li>
      </ul>
    </div>
  );
}
