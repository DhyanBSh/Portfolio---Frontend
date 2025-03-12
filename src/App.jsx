// src/App.js
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Components/PortfolioContent/projects';
import './index.css';
import CursorEffect from './Components/CursorEffect/CursorEffect';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
  const sectionsRef = {
    Home: useRef(null),
    About_Me: useRef(null),
    Services: useRef(null),
    Portfolio: useRef(null),
    Contact: useRef(null),
  };

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus); // Set authentication status
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <CursorEffect />
              <NavBar sectionsRef={sectionsRef} />
              <div ref={sectionsRef.Home}><Home /></div>
              <div ref={sectionsRef.About_Me}><About /></div>
              <div ref={sectionsRef.Services}><Services /></div>
              <div ref={sectionsRef.Portfolio}><Experience /></div>
              <div ref={sectionsRef.Contact}><Contact /></div>
              <Footer />
            </>
          }
        />

        {/* New project-specific routes */}
        <Route
          path="/projects/:category"
          element={
            <>
              <CursorEffect />
              <Projects />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
