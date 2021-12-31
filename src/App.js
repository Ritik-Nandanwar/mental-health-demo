import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Message from "./Components/Message";
import Map from "./Components/Map";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="message" element={<Message />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
