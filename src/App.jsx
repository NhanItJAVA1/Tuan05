import "./App.css";
import LaiXuat from "./LaiXuat/LaiXuat";
import { Routes, Route } from "react-router-dom";
import Chefify from "./Chefify/Chefify";
import Chefify2 from "./Chefify/Chefify2";
import Counter from "./Tuan6/Counter";
import Home from "./Tuan6/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/laixuat" element={<LaiXuat />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Chefify />} />
        <Route path="/2" element={<Chefify2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
