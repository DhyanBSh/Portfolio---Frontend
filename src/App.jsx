import React, { useRef, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './index.css';

const App = () => {
  const sectionsRef = {
    Home: useRef(null),
    AboutMe: useRef(null),
    Services: useRef(null),
    Portfolio: useRef(null),
    Contact: useRef(null),
  };

  return (
    <>
      <NavBar sectionsRef={sectionsRef} />
      <div ref={sectionsRef.Home}><Hero /></div>
      <div ref={sectionsRef.AboutMe}><About /></div>
      <div ref={sectionsRef.Services}><Services /></div>
      <div ref={sectionsRef.Portfolio}><Experience /></div>
      <div ref={sectionsRef.Contact}><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
