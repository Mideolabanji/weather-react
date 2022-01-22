import React from "react";
import "./App.css";

export default function setBody(props) {
  return (
    <ul className="Font">
      <li>Temperature: {Math.round(props.response.data.main.temp)}°C</li>
      <li>Description: {props.response.data.weather[0].description}</li>
      <li>Humidity: {props.response.data.main.humidity}</li>
      <li>Wind: {Math.round(props.response.data.wind.speed)}</li>
      <li>
        <img
          src={`http://openweathermap.org/img/wn/${props.response.data.weather[0].icon}@2x.png`}
          alt=""
        />
      </li>
    </ul>
  );
}
