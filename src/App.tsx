import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";

function App() {
  return (
    <div className="weberklee">
      <HashRouter>
        <Navigation/>

        <Routes>
            <Route path="/" element={<Home/>} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
