import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import getRankings from "./engine/matchmaking";

function App() {
  let rankings = getRankings({ temp: 4, population: 9, stars: 7 });

  return <div>{rankings[0].park.name}</div>;
}

export default App;
