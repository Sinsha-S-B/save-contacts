// App.js

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Notfound from "./pages/Notfound";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
