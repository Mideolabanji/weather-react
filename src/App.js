import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container">
          <Weather />
        </div>
        <p>
          <a
            href="https://github.com/Mideolabanji/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://ecstatic-volhard-31db0c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Olamide Olabanji
          </a>
        </p>
      </div>
    </div>
  );
}
