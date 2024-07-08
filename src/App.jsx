import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import ABout from "./pages/ABout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ABout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
