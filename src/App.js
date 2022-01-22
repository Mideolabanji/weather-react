import React from "react";
import Form from "./Form";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form />
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
  );
}
