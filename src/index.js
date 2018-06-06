import React from "react";
import { render } from "react-dom";
import { Card } from "./components";

import "./styles.css";

const App = () => (
  <div className="App">
    <ul className="App-list">
      <li className="App-list-item">
        <Card />
      </li>
      <li className="App-list-item">
        <Card />
      </li>
      <li className="App-list-item">
        <Card />
      </li>
    </ul>
  </div>
);

render(<App />, document.getElementById("root"));
