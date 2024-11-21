import React from 'react';
import './App.css';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import Search from "./Search";

function App() {
  return (
    <div className="weberklee">
      <HashRouter>
        <Navigation/>

        <div className={"main-screen"}>
            <Routes>
                <Route path="/" element={<Navigate to={"Home"}/>}/>
                <Route path="/Home" element={<Home/>} />
                <Route path="/Search" element={<Search/>} />
                <Route path="/Profile" element={<Profile/>} />
            </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
