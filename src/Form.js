import React, { useState } from "react";
import axios from "axios";
import UpdateBody from "./updateBody";
import "./App.css";

export default function Search() {
  let [body, setBody] = useState(null);
  let [city, setCity] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();

    function showTemperature(response) {
      setBody(<UpdateBody response={response} />);
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=872e937052bfbc7cf66f2ac8c3fcaba7&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={updateCity}
          className="padding margin"
          type="search"
          placeholder="Enter a city"
        />
        <input className="padding" type="submit" value="Search" />
      </form>
      {body}
    </div>
  );
}
