import React from "react";
import "./App.css";
import "./Pages/Commoncsspart.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Allfruits from "./Pages/Allfruits";
import Freshcuts from "./Pages/Freshcuts";
import Giftsbykimaye from "./Pages/Giftsbykimaye";
import Fruitcombos from "./Pages/Fruitcombos";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allfruits" element={<Allfruits />} />
        <Route path="freshcuts" element={<Freshcuts />} />
        <Route path="fruitscombos" element={<Fruitcombos/>} />
        <Route path="giftsbykimaye" element={ <Giftsbykimaye/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
