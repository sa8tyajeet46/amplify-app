import logo from "./logo.svg";
import "./App.css";

import { API } from "aws-amplify";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Coins from "./Coins";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile></Profile>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
