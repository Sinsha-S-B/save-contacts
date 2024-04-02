// App.js

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <Router>
      <div>private contacts</div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
         
        </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

export default App;
