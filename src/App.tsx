import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Matchmaking from "./pages/Matchmaking";
import Results from "./pages/Results";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Matchmaking />} />
          </Route>
          <Route path="/results">
            <Route index element={<Results />} />
          </Route>
          <Route path="/parks:code">
            <Route index element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
