import React, { useState } from "react";
import axios from "axios";
import UpdateBody from "./updateBody";
import "./App.css";

export default function Weather() {
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
      {body}
    </div>
  );
}
