import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}
