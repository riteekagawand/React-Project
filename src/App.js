import React from 'react';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Album from "./components/pages/Album.jsx";
import About from "./components/pages/About.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/Album" element={<Album />} />
        <Route path="/About" element={<About />} />
        <Route exact path="/" element={<Home />} />
        
        
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Layout />
  );
};

export default App;