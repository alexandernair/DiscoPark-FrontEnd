import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Matchmaking from "./pages/Matchmaking";
import Results from "./pages/Results";
import ResultsPark from "./pages/ResultsPark";
import TopMatch from "./pages/topMatch";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Matchmaking />} />
          </Route>
          <Route path="/matched">
            <Route index element={<TopMatch />} />
          </Route>
          <Route path="/results">
            <Route index element={<Results />} />
          </Route>
          <Route path='/park/:code'>
            <Route index element={<ResultsPark />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
