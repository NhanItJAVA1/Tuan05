import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LaiXuat from "./LaiXuat/LaiXuat";
import { Routes, Route } from "react-router-dom";
import Chefify from "./Chefify/Chefify";
import Chefify2 from "./Chefify/Chefify2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/laixuat" element={<LaiXuat />} />
        <Route path="/" element={<Chefify />} />
        <Route path="/2" element={<Chefify2/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
