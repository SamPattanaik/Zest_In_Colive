import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Testimonial from './Testimonial/Testimonial';
import Price from './Price/Price';
import ContactUs from './ContactUs/ContactUs';
import './App.css'; // Import the global CSS

function App() {
  const location = useLocation();

  const getBackgroundClass = (pathname) => {
    switch (pathname) {
      case '/':
        return 'home-background';
      case '/about':
        return 'about-background';
      case '/gallery':
        return 'gallery-background';
      case '/testimonial':
        return 'testimonial-background';
      case '/price':
        return 'price-background';
      case '/contact-us':
        return 'contact-background';
      default:
        return '';
    }
  };

  return (
    <div className={`App ${getBackgroundClass(location.pathname)}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
