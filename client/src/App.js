import React from "react";
// import './App.css';
// import "./index.css";
// import bkvid from './pages/espresso.mp4';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";
import Menu from "./pages/menu";
import Events from "./pages/events";
import Tickets from "./pages/tickets";
import Poetry from "./pages/poetry";
import Improv from "./pages/improv";
import Music from "./pages/music";
import About from "./pages/about";
import Credits from "./pages/credits";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);


function App() {
  return (
    <Router>
    <NavBar />

    <Routes>
      <Route exact path="/" exact element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/events" element={<Events />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/music" element={<Music />} />
      <Route path="/improv" element={<Improv />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/about" element={<About />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/external" component={() => {window.location = "https://caroline-reed.github.io"; return null;}} />
    </Routes>

    <Footer />
    </Router>
  );
}

export default App;
